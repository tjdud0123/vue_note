<!--for 문에서 엑티브 한값 골라내기-->

<!--.vue 파일-->
    <label
        v-for="(grade) in grades"
        v-bind:key="grade.grade"
        v-on:click.prevent="setGrade(grade.grade)"
        v-bind:class="{ active : curGrade === grade.grade }"
    >
  </label>



<script>
export default {
  data() {
    return {
      curGrade: 1,
      grades: [
        { grade: 1 },
        { grade: 2 },
        { grade: 3 },
        { grade: 4 },
        { grade: 5 }
      ]
    };
  },
  methods: {
    setGrade(gradeSelf) {
      // 데이터 셋팅
      this.curGrade = gradeSelf;
    }
  }
};
</script>