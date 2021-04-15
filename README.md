# ✍️ Vue.js_note - vue 관련 메모 ✍️

### 🔶 v-if & v-show
렌더링이 자주일어날 때; CSS 기반 토글만으로 초기 조건에 관계 없이 엘리먼트가 항상 렌더링
일반적으로 v-if는 토글 비용이 높고 v-show는 초기 렌더링 비용이 더 높습니다. 매우 자주 바꾸기를 원한다면 v-show를, 런타임 시 조건이 바뀌지 않으면 v-if를 권장합니다.

### 🔶 v-for & v-if
동일한 노드에 두가지 모두 있다면, v-for가 v-if보다 높은 우선순위를 갖습니다. 즉, v-if는 루프가 반복될 때마다 실행됩니다. 이는 일부 항목만 렌더링 하려는 경우 유용합니다.

### 🔶 $event로 DOM접근
때로 인라인 명령문 핸들러에서 원본 DOM 이벤트에 액세스 해야할 수도 있습니다. 특별한 $event 변수를 사용해 메소드에 전달할 수도 있습니다.

### 🔶 camelCase vs. kebab-case
HTML 속성은 대소 문자를 구분하지 않으므로 문자열이 아닌 템플릿을 사용할 때 camelCased prop 이름에 해당하는 kebab-case(하이픈 구분)를 사용해야 합니다.
```
props: ['myMessage'], <child my-message="안녕하세요!"></child>
```

### 🔶 $refs 사용시 유의 사항
$refs는 랜더링 됭 후 값이 채워집니다. 또한 $refs는 반응적이지 않습니다.($refs가 변경 되어도 watch, computed 등으로 감지 하지 못함) 그렇기 때문에 template에서나 computed에서 $refs를 사용하는 것은 피해야 합니다.

### 🔶 deep selector
scoped를 쓰게되면 부모 구성 요소의 스타일이 자식 구성 요소로 내려가지 않습니다.
그렇다면 만약 scoped를 쓰고나서 하위 컴포넌트 css 까지 조작하고 싶으면 이때 사용하는 것이 deep selector입니다.
`>>>`combinator를 사용합니다
❗️sass와 같은 css 전처리기 사용시 `>>>`대신 `::v-deep`을 사용해야 합니다.

### 🔶 v-for with v-if
> Note that it’s not recommended to use v-if and v-for together. Refer to style guide for details.
v-for과 v-if를 같이 쓰는 것은 권장되지 않는다.
v-for이 v-if보다 높은 우선순위를 가지고 있기 때문에 사용 용도에 따라 알맞게 사용해야 한다.
함께 사용할 경우 1번의 로직대로 수행되게 된다.
1. 특정한 값을 가진 노드만 렌더링 하고 싶을 때 (like filter) -> filter로 대체 가능
2. 조건에 따라 아예 for문을 돌리고 싶지 않을 때 -> v-if를 상위 요소에 적용

### 🔶 Vue Fragment
컴포넌트의 루트 엘레먼트가 필요없을 때 불필요한 div 태그 생성을 막을 수 있다. 
vue 버전 3부터는 기능을 제공하지만 2에서는 패키지를 다운해 사용할 수 있다.
[npm 깃헙 링크](https://www.npmjs.com/package/vue-fragments)
```
$ yarn add vue-fragment
```

```html
<Fragment>
  <section></sectoion>
  <div></div>
</Fragment>
```

```js
import { Fragment } from 'vue-fragment'
  components:{
    Fragment
  },
```

### 🔶 폼입력 데이터 바인딩
텍스트 영역의 보간 `(<textarea>{{ text }}</textarea>)`은 작동하지 않습니다. 대신 v-model를 사용하십시오.
v-model 표현식의 초기 값이 어떤 옵션에도 없으면, `<select>` 엘리먼트는 “선택없음” 상태로 렌더링됩니다. iOS에서는 이 경우 변경 이벤트가 발생하지 않아 사용자가 첫 번째 항목을 선택할 수 없게됩니다. 사용하지 않는 옵션에 빈 값을 넣는 것이 좋습니다.
  
### 🔶 vue - router 새탭에서 창열기
```js
let routeData = this.$router.resolve({name: 'routeName', query: {data: "someData"}});
window.open(routeData.href, '_blank');
```

### 🔶 img 404 이미지등 불러오는 에러났을때 default 처리 - onError property 사용
```js
<img :src="defaultImg" alt="" @error="defaultImg">
```
