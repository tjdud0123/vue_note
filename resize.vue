<!-- resize 됐을때 css로 해결 불가능한 경우 -->
<script>
    export default{
         methods: {
            handleResize (event) {
                console.log(window.innerWidth)
            },
            handleScroll() {
			console.log('scrolling..........!!!!', window.scrollY);
		}
        },
        mounted() {
            window.addEventListener('resize', this.handleResize);
            window.addEventListener('scroll', this.handleScroll);
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.handleResize)
            window.removeEventListener('scroll', this.handleScroll);
        }
    }
</script>
