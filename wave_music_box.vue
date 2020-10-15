<!-- html / vue-->
<div class="music-container">
    <div class="music-box d-flex align-items-center justify-content-center flex-column">
      <audio v-show="false" controls ref="controler">
        <source src="music.mp3" type="audio/mpeg" />
      </audio>
      <div id="wave"></div>
      <img :src="fas_music.png" alt="" class="sound-icon" />
      <h6 class="bottom-txt">{{ curTime }}</h6>
    </div>
</div>

<!-- js 부분 -->
<script>
export default {
  data() {
    return {
      curTime: '',
      controler: {
        currentTime: 0,
      },
    };
  },
  mounted() {
    this.$nextTick(function () {
      this.onInitAudio();
    });
  },

  methods: {
    async onInitAudio() {
      this.controler = this.$refs.controler;
      await this.controler.play();
      this.controler.loop = true;
      this.controler.addEventListener('timeupdate', () => this.setCurTime());
    },
    setCurTime() {
      this.curTime = this.getCurTime();
    },
    getCurTime() {
      const curSec = (this.controler.currentTime - 0.2).toFixed();
      const curMin = parseInt(curSec / 60);
      const mm = curMin < 10 ? '0' + curMin : curMin;
      const ss = curSec % 60 < 10 ? '0' + (curSec % 60) : curSec % 60;
      return mm + ':' + ss;
    },
  },
};
</script>

<!-- css 부분 -->

<style lang="scss" scoped>
.music-container {
  width: 360px;
  height: 360px;
}
.music-box {
  margin-top: -0.5rem;
  width: 40%;
  height: 40%;
  background: aliceblue;
  border-radius: 20px;
  position: relative;
}

.sound-icon {
  width: 70%;
  height: 70%;
  z-index: 3;
}
.bottom-txt {
  position: absolute;
  bottom: -2.2rem;
  font-weight: 500;
  color: black;
}

#wave {
  position: absolute;
  bottom: 0;
  height: 50%;
  width: 100%;
  z-index: 1;
  border-radius: 0 0 20px 20px;
  -webkit-animation: 2s ease-in-out 0s infinite alternate wave;
  animation: 2s ease-in-out 0s infinite alternate wave;
  background-image: url('wave.png');
  background-position: 0% 0%;
  background-size: 300% 100%;
}
    
@-webkit-keyframes wave {
 0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 0%;
  }
}
@keyframes wave {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 0%;
  }
} ;
</style>
