<!--같은 페이지를 리로드가아닌 리마운트를 하고싶을 때-->
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
    componentKey:''
  }),
  mounted() {
    this.componentKey = this.user.id;
  },
  watch: {
    'user.id': function (val, oldVal) { 
      this.componentKey = val;
    },
  },
}
</script>

<!--child.vue : 라우터 뷰-->
<template>
    <transition mode="out-in">
        <router-view />
    </transition>
</template>
