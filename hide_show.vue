<!--.vue 파일 - 부모 컴포넌트 -->
<child v-on:showContent="showContent" v-bind:propsdata="shows"></child>

<div v-if="shows.isOne"></div>
<div v-if="shows.isTwo"></div>

<script>
import Child from '../child'
export default {
    data() {
        return {
            shows: { isOne: false, isTwo: true }
        };
    },
    methods: {
        showContent(param) {
            this.shows.isOne = param === "One";
            this.shows.isTwo = param === "Two";
        },
    }
}
</script>

<!--.vue 파일 - 자식 컴포넌트 -->
<div
    v-on:click.prevent="show('One')"
    v-bind:class="{ active: propsdata.isOne }"
>

<div
   v-on:click.prevent="show('Two')"
   v-bind:class="{ active: propsdata.isTwo }"
>
    
<script>
    export default {
    props: ["propsdata"],
    methods: {
        show(what) {
            this.$emit("showContent", what);
        }
    }
}
</script>
