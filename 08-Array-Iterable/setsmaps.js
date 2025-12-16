// Set 생성
// - 고유한 값을 관리할 때 유용함
const ids = new Set(["Hi", "from", "set!"]);
ids.add(2);
if (ids.has("Hi")) {
  ids.delete("Hi");
}

// 이터러블 반환
// - 항상 2개의 entries 또는 entry 당 요소가 2개 있음
// -> 이유? Map의 entries() 메서드와 일치해야 하기때문 즉, Set을 Map으로 바꾸기 위함
for (const entry of ids.entries()) {
  console.log(entry);
}
