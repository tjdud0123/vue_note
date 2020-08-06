<!-- resize 됐을때 css로 해결 불가능한 경우 -->
<script>
    export default{
         methods: {
            handleResize (event) {
                console.log(window.innerWidth)
            }
        },
        mounted() {
            window.addEventListener('resize', this.handleResize)
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.handleResize)
        }
    }
</script>
