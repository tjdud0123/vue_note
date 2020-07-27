<!--.vue 파일 - 링크 넘기기 전 -->
<router-link :to="{name : 'componentName', params : { param1 : type, param2 : id }}">
</router-link>

<!--.vue 파일 - 링크 이동 후 뒤로가기 -->
<a @click="$router.go(-1)">뒤로가기</a>

<script>
import Router from "vue-router";
    
export default{
    data(){
      return {
          isIndex: this.$router.currentRoute.path === '/'
      }
    },
    created(){
        console.log(this.$route.params.param1)
        console.log(this.$route.params.param2)
    },
    // 라우트 변경 감지
    watch: { '$route' (to, from) {
      this.isIndex = to.name === 'index'
      }
    },
    // 라우팅 이전 정보 받아오기
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.formData.refCode = from.name;
            vm.from = from;
        });
    }
}
</script>

<!--routes.js-->
import ComponentName from '..componentName'

{ path: '/articles/:param1/:param2', name: 'componentName', component: ComponentName }

