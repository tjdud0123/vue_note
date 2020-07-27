<!--백그라운드에 영상 깔기-->
<!--https://github.com/avidofood/vue-responsive-video-background-player-->

<!-- npm install vue-responsive-video-background-player-->

 <video-background 
    src="<your-default-video-path>.mp4"
    poster="/images/mainfoto.jpg"
    :sources="[
        {src: '<your-tablet-video-path>.mp4', res: 900, autoplay: true}, 
        {src: '<your-mobile-video-path>.mp4', res: 638, autoplay: true, poster: '<your-mobile-background-image-path>.png'}
    ]"
    style="max-height: 400px; height: 100vh;"
    overlay="linear-gradient(45deg,#2a4ae430,#fb949e6b)" 
>
    <h1 style="color: white;">헤더 내용!</h1>
</video-background>

<script>
import VideoBackground from 'vue-responsive-video-background-player'
export default {
    components: {
        VideoBackground
    }
}  
</script>
