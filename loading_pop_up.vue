<div v-show="!isLoaded" class="loading-box">
  <div class="text-center" style="padding: 12rem">
    <div class="spinner-border text-white" style="width: 3rem; height: 3rem" role="status" />
    <h1 class="text-white">로딩 팝업 모달입니다.</h1>
  </div>
</div>

<script>
    export default {
        data() {
            return {
                isLoaded: false,
            }
        }
}
</script>

<style lang="scss" scoped>
    .loading-box {
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      top: 0;
      width: 100%;
      height: 100vh;
      background: rgba(0, 0, 0, 0.3);
    }
</style>
