//설치
npm install --save vuex

//main.js
import { store } from './store/store'
new Vue({
  store,  // store: store,  // ES6
  el: '#app',
  render: h => h(App)
})

// 뷰파일
<script>
import { mapGetters } from 'vuex';
export default {
    mounted(){
        console.log(this.currentUser)
    },
    computed: {
        ...mapGetters({
          currentUser: 'auth/user',
          isAuth: 'auth/check',
        }),
      }
}
</script>

// store > auth.js
export const getters = {
  user: state => state.user,
  check: state => state.user !== null,
};
