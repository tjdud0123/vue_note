<!--.vue 파일-->
<input type="phone" id="input-phone" placeholder="01012345678" v-model="formData.phoneNum" />

<textarea placeholder="내용을 입력해 주세요." v-model="formData.content"></textarea>

<button type="button" v-on:click.prevent="postConsulting" v-bind:data-target="isApplied">신청 하기</button>

<div id="modal_success" tabindex="-1">
    <button type="button" v-on:click="confirm">확인</button>
</div>

<div id="modal_5" tabindex="-1">실패</div>

<script>
export default {
    data() {
        return {
            formData: {
                phoneNum: "",
                content: "",
                startedAt:""
            }
        };
    }
    computed: {
        isApplied() {
            return this.formData.phoneNum && this.formData.content ? "#modal_success" : "#modal_5"
        },
    },
    methods: {
        postConsulting() {
            this.formData.startedAt = new Date();
            const payload = this.formData;
            if (this.formData.phoneNum && this.formData.content) {
                this.$apiService.postConsulting(payload).then(response => {
                    console.log(payload);
                });
            }
        },
        async confirm() {
            await this.getConsulting()
            this.formData.phoneNum = "";
            this.formData.content = "";
        },
    }
}
</script>

<!--index.js-->
postConsulting(payload) {
    return apiConfig.post(`/consultings`, payload)
},
