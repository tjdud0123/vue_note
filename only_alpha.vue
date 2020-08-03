<input
  type="text"
  placeholder="영어만 입력해주세요"
  v-model="name"
  v-on:input="onlyAlpha($event)"
/>

<script>
export default {
    data(){
        name:"dafaultName"
    },
    method:{
        onlyAlpha(e) {
          const regHG = /[ㄱ-ㅎㅏ-ㅣ가-힣]/gi;
          if (regHG.test(e.data)) {
            e.target.value = e.target.value.replace(regHG, '');
            this.formData.name = e.target.value;
          }
        }
    }
}
</script>
