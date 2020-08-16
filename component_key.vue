<!--같은 페이지를(라우트 동일) 리로드가 아닌 컴포넌트 재생성을 하고싶을 때-->
<div class="main-content">
  <child-component :key="componentKey" />
</div>

<script>
import ChildComponent from './ChildComponent.vue';
export default {
  components: {
    ChildComponent
  },
  
  data: () => ({
    componentKey:true
  }),
  
  methods:{
        reCreate() {
            this.componentKey = !this.componentKey
        }
    }
}
</script>

<!--child.vue : 라우터 뷰-->
<template>
    <transition mode="out-in">
        <router-view />
    </transition>
</template>
