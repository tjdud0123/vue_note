<script>
export default {
watch: {
    // 일반적 사용법 - a 변경 시 이전값과 현재값 받아옴
    a: function (val, oldVal) {
      console.log('new: %s, old: %s', val, oldVal)
    },
    
    // 함수이름으로 변경 감지시 메소드 호출
    b: 'someMethod',

    // 객체 변경 감지
    c: {
      handler: function (val, oldVal) { /* ... */ },
      deep: true // '객체 주소값'이 아닌 '값'까지 비교할 때
    },
    
    // 변경 감지 후 바로 콜백함수 실행
    d: {
      handler: 'someMethod',
      immediate: true
    },
    // 여러개 콜백함수 배열로 저장, 하나씩 호출 됨
    e: [
      'handle1',
      function handle2 (val, oldVal) { /* ... */ },
      {
        handler: function handle3 (val, oldVal) { /* ... */ },
        /* ... */
      }
    ],
    // 객체 특정값 변경 감지 원할 때
    'e.f': function (val, oldVal) { /* ... */ }
  }
}
</script>
