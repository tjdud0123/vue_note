<!--비디오 모달 닫기-->
<base-modal
  v-bind:show.sync="modals.video"
  modal-classes="modal-dialog-centered video-body modal-lg play-modal"
  @close="pauseVideo"
>
  <h6 slot="header" class="modal-title">헤더 텍스트</h6>
  <div>
    <vue-plyr ref="plyr">
      <div class="plyr__video-embed">
        <iframe
          src="https://"
          frameborder="0"
        ></iframe>
      </div>
    </vue-plyr>
  </div>
</base-modal>
<!--비디오 멈추기 vue-plyr-->

<!--// 구글링해도 안나오면 콘솔에 쳐보고 함수 찾기-->
<script>
    method(){
        pauseVideo() {
          //console.log('closed');
          this.$refs.plyr.player.media.pause();
        },
    }
</script>
