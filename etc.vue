<!--기타 메모-->

<!--html형식으로 넘어오는 텍스트-->
<div v-html="article.contentHtml"></div>

<!--컴포넌트 삽입-->
<script>
import 컴포넌트이름 from ".vue파일 경로";
export default {
  components: {
    컴포넌트이름
  }
};
</script>

<!-- 프롭스 & 이벤트 -->
<child-component v-on:setIdx="setIdx" :listLength="articles.length" :printLength="printLength"></child-component>

props: ['listLength', 'printLength'],
this.$emit("setIdx", this.order * this.printLength + this.ulIdx * this.printLength * 5);

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
        <td>{{ index }} {{ article }}</td>
    </tr>
</tbody>
    
<div v-for="(value, key, index) in object">
  {{ index }}. {{ key }}: {{ value }}
</div>

<div>
  <span v-for="n in 10">{{ n }} </span>
</div>

<!-- v-model - 데이터 바인딩  -->
<input type="phone" class="form-control" id="input-phone" placeholder="01012345678" v-model="formData.phoneNumber" />
    
    data() {
        return {
            formData: {
                phoneNumber: ""
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
      vm.refCode = from.name;
      vm.from = from;
    });
  }
};
</script>