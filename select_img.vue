<!-- 클릭에 따라 이미지 hide and show -->
    <div class="col-12">
        <!-- select 버튼 -->
        <div class="col-3" v-if="imgNum !== 1">
            <img v-on:click.prevent="setImg(1)">
        </div>
        <div class="col-3" v-if="imgNum === 1"><img src="./img1"></div>

        <div class="col-3" v-if="imgNum !== 2">
            <img v-on:click.prevent="setImg(2)">
        </div>
        <div class="col-3" v-if="imgNum === 2"><img src="./img2"></div>

        <div class="col-3" v-if="imgNum !== 3">
            <img v-on:click.prevent="setImg(3)">
        </div>
        <div class="col-3" v-if="imgNum === 3"><img src="./img3"></div>
    </div>
    <!-- tooltip img-->
    <div class="col-12">
        <img class="tooltip-img" v-if="imgNum === 1">
        <img class="tooltip-img" v-if="imgNum === 2">
        <img class="tooltip-img" v-if="imgNum === 3">
    </div>

<script>
 export default {
    data(){
        return{
            imgNum: 1
        }
    }
    methods: {
        setImg(num){
            this.imgNum = num
        }
    }
}
</script>
