<!--로딩구현-->

<!--.vue 파일-->
<div class="container" v-if="isLoaded">
    보이는부분
</div>

<div v-if="!isLoaded" class="justify-content-center">
    <div class="text-center" style="padding: 12rem;">
         <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status" />
    </div>
</div>

<script>
export default {
    data() {
        return {
            data: [],
            isLoaded: false,
        }
    },
    created() {
        this.getData()
    },
    methods: {
        getData() {
            this.isLoaded = false;
            this.$apiService.getData({})
                .then(response => {
                    this.data = response.data.data;
                    this.isLoaded = true;
                })
        }
    }
}
</script>
