<!--for 문에서 엑티브 한값 골라내기-->

<!--.vue 파일-->
    <label
        v-for="(option) in options"
        v-bind:key="option.num"
        v-on:click.prevent="setNum(option.num)"
        v-bind:class="{ active : curNum === option.num }"
        v-bind:style="{ color: curNum === option.num ? option.color : '' }"
    >
  </label>



<script>
export default {
  data() {
    return {
      curNum: 1,
      options: [
        { num: 1, color:'red' },
        { num: 3, color:'yellow' },
        { num: 5, color:'blue' },
        { num: 7, color:'green' },
        { num: 9, color:'purple' }
      ]
    };
  },
  methods: {
    setNum(num) {
      // 데이터 셋팅
      this.curNum = num;
    }
  }
};
</script>
