<!--더보기 버튼 누르면 게시물 더 출력됨-->
<div class="more-container"\v-if="isMore">
    <button v-on:click.prevent="showMore">더 보기</button>
</div>

<tbody>
    <!-- v-model="nowList" -->
    <tr class="list" v-for="(article, index) in nowList " v-bind:key="index">
        <td class="text-center">{{ getIndex(index)}}</td>
    </tr>
</tbody>

<script>
export default {
    data() {
        return {
            startIdx: 0,
            articles: [],
        }
    },
    mounted(){
        this.startIdx = this.articles.length > 10 ? this.articles.length-10 : 0;
    },
    methods: {
        getIndex(num) {
            return this.articles.length - num
        },
        showMore(){
            this.startIdx = this.startIdx > 10 ? this.startIdx-10 : 0
        }
    },
    computed: {
        nowList() {
            return this.articles.slice(this.startIdx)
        },
        isMore(){
            return this.startIdx > 0
        }
    }

}
</script>
