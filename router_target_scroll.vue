<!-- 라우트로 넘아가기 전 페이지 -->
<router-link v-bind:to="{ path: '/page2', params: { target: true } }"></router-link>
<!-- 라우트로 넘어간 페이지 -->
<div id="target" ref="target"></div>
<script>
    export default {
        mounted() {
            this.$nextTick(function () {
                this.$route.params?.target && this.$refs.target?.scrollIntoView();
            });
        },
    }
</script>
