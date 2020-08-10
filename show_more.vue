<div class="table-container">
    <table class="table">
        <thead>
            <tr>
                <th class="text-center" scope="col" style="width:20%">번호</th>
                <th class="text-center" scope="col" style="width:60%">제목</th>
                <th class="text-center" scope="col" style="width:20%">등록 날짜</th>
            </tr>
        </thead>
        <tbody>
            <tr class="list" v-for="(article, index) in nowList " v-bind:key="index">
                <td class="text-center">{{ getIndex(index)}}</td>
                <td>{{ article.title }}</td>
                <td class="text-center">{{ article.createdAt }}</td>
            </tr>
        </tbody>
    </table>
</div>
<div class="d-flex justify-content-center" v-if="articles.length === 0" >등록된 게시글이 없습니다</div>
<div class="more-container" v-if="isMore">
    <button class="more" type="button" v-on:click.prevent="showMore">
        게시물 더 보기 <i class="fas fa-angle-right"></i>
    </button>
</div>

<script>
export default {
    data() {
        return {
            lastIdx: 10,
            articles: [],
        }
    },
    
    // 데이터 불러오기
    created() {
        this.$apiService.getArticles(this.articleType, {})
            .then(response => {
                this.articles = response.data.data;
            })
    },
    
    methods: {
        getIndex(num) {
            return this.articles.length - num
        },
        showMore(){ // 더보기 클릭
            this.lastIdx += 10
        },
    },
    
    computed: {
       nowList() {
            return this.articles.slice(0,this.lastIdx)
        },
        isMore(){ // 더보기버튼 출력 여부
            return this.lastIdx < this.articles.length
        }
    }
}
</script>
