<!--.vue 파일 - 링크 넘기기 전 -->
<router-link :to="{name : 'componentName', params : { param1 : type, param2 : id }}">
</router-link>

<!--.vue 파일 - 링크 이동 후 -->
<a @click="$router.go(-1)">뒤로가기</a>

<script>
import Router from "vue-router";
    
export default{
    created(){
        console.log(this.$route.params.param1)
        console.log(this.$route.params.param2)
    }
}
</script>

<!--routes.js-->
import ComponentName from '..componentName'

{ path: '/articles/:param1/:param2', name: 'componentName', component: ComponentName }
