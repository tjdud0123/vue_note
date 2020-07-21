<!--filter 속성 예제-->

<!--.vue 파일-->
<span>{{ createdAt | moment('YYYY-MM-DD') }}</span>
<script>
export default {
    data() {
        return {
            createdAt:new Date()
        }
    },
    filters: {
        dayFilter(date) {
            return moment(date).format('YYYY.MM.DD hh:mm')
        }
    }
}
</script>
