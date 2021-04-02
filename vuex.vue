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
import { mapGetters, mapMutations } from 'vuex'; // vuex helper => 접근하기 쉽게 도와줌
export default {
    mounted(){
        console.log(this.currentUser)
    },
    computed: {
        ...mapGetters({
          currentUser: 'auth/user',
          isAuth: 'auth/check',
        }),
    },
    methods: {
	...mapMutations('loginlModule', {
		$_showAlert: loginlModuleType.mutations.SET_ALERT_POPUP,
	}), 
    }
}
</script>

// store > auth.js

//Type constants
export const Types = {
	actions: {
		FETCH: 'fetch',
	},
	mutations: {
		SET_DATA: 'setData',
	},
};

//initial state // 변수담음
const state = () => ({
	property1: null, // API original data
});

const getters = { // computed랑 비슷하게 간략하게/캐싱할때 사용
  user: state => state.user,
  check: state => state.user !== null,
};

const actions = { // 외부에서 dispatch로 실행
  [Types.actions.FETCH]({dispatch, commit, state}) {
    return new Promise((resolve, reject) => {
      commit(Types.mutations.SET_DATA, newData); // 상태 변이
      resolve(newData);
    });
  });
}

// mutations
const mutations = { // commit으로 호출
	// API로 받은 데이터를 이용하여 각 state값 업데이트
	[Types.mutations.SET_DATA_FROM_ORIGIN](state, newData)	{
		const { property1 } = newData;
		state.property1 = property1;
	},	
};

export default {
	state,
	getters,
	actions,
	mutations
};
