<!--억지로 dom 접근하기-->
<script>
 export default{
    mounted() {
        const $dropbox = document.querySelectorAll('.selctor');
        $dropbox.forEach(element => (element.style.minWidth = 0));
    }
} 
</script>

<!-- ref 사용 -->
<input ref="input">
<child-component ref="child"></child-component>
<script>
import Child from './child.vue';
    
export default{
    components:{
        Child
    },
    methods: {
      focus: function () {
        this.$refs.input.focus()
      }
    },
    mounted() {
      if(this.$refs.child.property){ // data 속성 접근 가능
       this.$refs.child.childFunc(); // function 속성 접근 가능
      }
    }
}
</script>
