<!--기타 메모-->

<!--html형식으로 넘어오는 텍스트-->
<div class="article-content" v-html="article.contentHtml"></div>

<!--컴포넌트 삽입-->
<script>
import TutorAvatar from "../../common/tutorAvatar";
export default {
    components: {
        TutorAvatar
    }
}
</script>

<!-- 프롭스 & 이벤트 -->
<pagination v-on:setIdx="setIdx" :listLength="articles.length" :printLength="printLength"></pagination>

props: {
    isShow: {
      type: Boolean,
      default: false,
    },
    propsTopic: {
      type: Object,
      default: () => {},
    },
    something: { // 속성이 있는경우 && 타입이 필요한경우
    	type: Object,
        default: ()=> {
        	return{
            	example: "foo",
                foo: "example"
        	}
        }
    }
  },
  
  setIdx(){
    this.$emit("setIdx", startId);
  }

    setIdx(startId) {
        this.startIdx = startId
    },

<!-- 스타일 -->
<div style="border: none;font-size: 1rem;">
    
<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
data: {
  activeColor: 'red',
  fontSize: 30
}

<div v-bind:style="styleObject"></div>
data: {
  styleObject: {
    color: 'red',
    fontSize: '13px'
  }
}

<!-- v-for - 반복문  -->
<tbody>
    <tr class="list" v-for="(article, index) in nowList " v-bind:key="index">
        <td class="text-center">{{ getIndex(index) }}</td>
    </tr>
</tbody>
    
<div v-for="(value, key, index) in object">
  {{ index }}. {{ key }}: {{ value }}
</div>

<div> // n은 0부터가 아니라 1부터임
  <span v-for="n in 10">{{ n }} </span>
</div>

<!-- v-model - 데이터 바인딩  -->
<input type="phone" class="form-control" id="input-phone" placeholder="01012345678" v-model="formData.phoneHash" />
    
    data() {
        return {
            formData: {
                phoneHash: ""
            }
        };
    }
    
<!-- v-if -else -if  -->
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>

<!-- 라우팅 이전 정보 받아오기  --> 
<script>
export default {
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.formData.refCode = from.name;
            vm.from = from;
        });
    }
}
</script>
    
<!--여러개 체크박스 데이터 바인딩-->
<div id='example-3'>
  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
  <label for="jack">Jack</label>
  <input type="checkbox" id="john" value="John" v-model="checkedNames">
  <label for="john">John</label>
  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
  <label for="mike">Mike</label>
  <br>
  <span>체크한 이름: {{ checkedNames }}</span>
</div>
<script>
    export default {
        data: {
            checkedNames: []
          }
    }
</script>
    
<!--v-model이 관리하는 input을 자동으로 trim 하기 원하면, trim 수정자를 추가하면 됩니다-->
<input v-model.trim="msg">
    
<!-- 사용자 입력이 자동으로 숫자로 형변환 되기를 원하면, v-model이 관리하는 input에 number 수식어를 추가하면 됩니다.-->
<input v-model.number="age" type="number">
    
<!--props를 문자열 배열로 정의하는 대신 유효성 검사 요구사항이 있는 객체를 사용할 수 있습니다.-->
 props: {
    // 기본 타입 확인 (`null` 은 어떤 타입이든 가능하다는 뜻입니다)
    propA: Number,
    // 여러개의 가능한 타입
    propB: [String, Number],
    // 문자열이며 꼭 필요합니다
    propC: {
      type: String,
      required: true
    },
    // 숫자이며 기본 값을 가집니다
    propD: {
      type: Number,
      default: 100
    },
}

<!-- Inactive components will be cached! -->
<keep-alive>
  <component v-bind:is="currentTabComponent"></component>
</keep-alive>

<!--가끔 JavaScript에서 자식 요소에 직접 접근해야 하는 경우 ref 속성을 이용해 자식 요소에 레퍼런스 ID를 할당하여 해결할 수 있습니다.-->
<input ref="input">
methods: {
  // Used to focus the input from the parent
  focus: function () {
    this.$refs.input.focus()
  }
}
    
<!--애니메이션-->
  <transition name="bounce">
    <p v-if="show">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </transition>
    
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
    
<!-- scss 파일 삽입 -->
<style lang="scss" scoped>
@import "./plans.scss";
</style>
    
<!-- style scoped 후 deep selector로 잡아오기 -->
<style scoped>
.div1 >>> .div2 {
  height: calc(72vh - (173px + 1.5rem)) !important;
}
</style>
    
<!-- 영문, 띄어쓰기, 숫자입력만 - 정규식 이용 -->
<script>
const regType1 = /^[A-Za-z\s0-9+]*$/;
!regType1.test(this.formData.name) alert('영어랑 숫자만 입력해주세요!')
</script>
    
<!--DOM 갱신 후 실행하는 콜백함수-->
<script>
export default {
    mounted() {
        this.$nextTick(function() {
            var dom = document.getElementById('item-0');
            dom.style.backgroundColor = 'red';
        });
    }
}
</script>
<!--meta title 설정-->
<script>
export default {
    metaInfo() {
    return { title: '페이지 타이틀 이름' };
  }
}   
</script>
<!--ref로 잡아온 후 element class 속성 추가-->
<script>
export default 
    mounted() {
        this.audioCanvas.classList.add('w-100');
    }
    computed: {
    audioCanvas() {
      return this.$refs.audio.$el.firstChild;
    },
  },
}  
</script>
this.$refs.audio.$el.firstChild;

<!-- 자식 컴포넌트 라이프사이클 훅 사용 -->
<child-component
  @hook:created="onChildCreated"
  @hook:mounted="onChildMounted"
  @hook:updated="onChildUpdated"
/>

<!--404 에러 등 이미지 불러오기 실패시 default 처리 -->
<img :src="defaultImg" alt="" @error="defaultImg">
