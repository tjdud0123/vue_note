//routes.js
import { Page } from '../pages'

//pages 폴더 안 index.js
export { default as Page } from  './page1.vue'

// C 폴더 안 index.js ( data에서 import할 상수파일 )
import C from './C';
export default C;

/* --------------------------------------------------------- */

// data.js ( export할 정적파일 )
import C from '@commons/C';

export default function getData() {
  return { name:'seoYng', id:1111 }
}

export default function getData2() {
  return { name:'seoYng', id:1111 }
}

// app.js ( import할 파일 - js )
import { getData, getData2 } from './data';

// component.vue ( import할 파일 - vue )
<script>
import { getData, getData2 } from './data';
export default {
  data() {
    return {
      data: getData(),
      data2: getData2()
  }
</script>
