<!-- 5개씩 페이지네이션 해보기 -->

<!--.vue 파일 - 부모 컴포넌트 -->
<pagination v-on:setIdx="setIdx" :listLength="articles.length" :printLength="printLength"></pagination>

<tbody>
    <tr v-for="(article, index) in nowList " v-bind:key="index">
        <td >{{ getIndex(index) }}</td>
        <td >article.content</td>
    </tr>
</tbody>

<script>
import Pagination from "../components/Pagination";
    
export default {
    components: {
        Pagination
    },
    data() {
        return {
            startIdx: 0, // 출력데이터 시작 인덱스
            articles: [],
            printLength: 10 // 한페이지당 찍고자 하는 데이터 수
        }
    },
    methods:{
        setIdx(startId) { // event로 받음
            this.startIdx = startId
        },
        getIndex(num) { // 마지막 글이 1번이게 
            return this.articles.length - (this.startIdx + num)
        }
    },
    computed: {
        nowList() { // 현 페이지 출력 리스트
            return this.articles.slice(this.startIdx, this.startIdx + this.printLength)
        }
    }
}
</script>

<!--.vue 파일 - 자식 컴포넌트 -->

<ul class="pagination">
    <li class="page-item">
        <a class="page-link" v-on:click="prevPg">
            <span>&laquo;</span>
        </a>
    </li>
    <div class="pg-container" v-for="index in 5 " v-bind:key="index">
        <li class="page-item" v-if="getTotal(index-1)" v-on:click="setStartIdx(index-1)">
            <a class="page-link" v-bind:class="{ active : order === index-1 }">{{ulIdx*5 + index}}</a>
        </li>
    </div>
    <li class="page-item">
        <a class="page-link" v-on:click="nextPg">
            <span>&raquo;</span>
        </a>
    </li>
</ul>

<script>
export default {
    name: "pagination",
    props: ['listLength', 'printLength'],

    data() {
        return {
            order: 0, // 5 개중 몇 번째인지
            ulIdx: 0, // 뭉치 중 몇 번째인지
        };
    },

    updated() {
        this.$emit("setIdx", this.order*this.printLength + this.ulIdx*this.printLength*5);
    },

    methods: {
        prevPg() {
            if (this.ulIdx > 0) {
                this.ulIdx--;
                this.order = 0;
            }
        },
        nextPg() {
            if ((this.ulIdx + 1) * this.printLength * 5 < this.listLength) {
                this.ulIdx++;
                this.order = 0
            }
        },
        setStartIdx(num) {
            this.order = num
        },
        getTotal(num) {
            return this.listLength > this.ulIdx*this.printLength*5 + num*this.printLength
        }
    }

};

</script>

<style scoped>
ul {
    display: flex;
    justify-content: center;
}
.active {
    background-color: #E5E9F2;
}
</style>
