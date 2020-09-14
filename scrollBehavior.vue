// with transition

<!--App.vue-->
<template>
    <div id="app">
        <transition name="page" mode="out-in" @before-enter="beforeEnter">
            <component :is="layout" v-if="layout" />
        </transition>
    </div>
</template>

<script>
export default {
  methods: {
    beforeEnter() {
      this.$root.$emit('scrollBeforeEnter');
    },
  },
};
</script>

<!--roter/index.js-->
const router = createRouter();

function createRouter() {
  const router = new Router({
    scrollBehavior,
  });

  return router;
}

function scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return new Promise(resolve => {
        this.app.$once('scrollBeforeEnter', () => {
          resolve(savedPosition);
        });
      });
    }
    return {};
}


<!--roter/index.js-->
// without transition

scrollBehavior (to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  } else {
    return { x: 0, y: 0 }
  }
}
