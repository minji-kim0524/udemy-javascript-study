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

// Map 생성
const person1 = { name: "Max" };
const person2 = { name: "Manuel" };

const personData = new Map([[person1, [{ date: "yesterday", price: 10 }]]]);

// 데이터 추가 -> Set 메서드 사용
personData.set(person2, [{ date: "two weeks ago", price: 100 }]);

console.log(personData);
console.log(personData.get(person1));

// Map에 저장된 데이터 출력하는 방법 3가지
// - 공통: 모두 for of 반복문 사용

// 방법 1. 모든 요소에 접근
for (const entry of personData.entries()) {
  console.log(entry);
}

for (const [key, value] of personData.entries()) {
  console.log(key, value);
}

// 방법 2. 키에만 관심 있는 경우
for (const key of personData.keys()) {
  console.log(key);
}

// 값에만 관심 있는 경우
for (const value of personData.values()) {
  console.log(value);
}

// clear 메서드
// - Map 의 모든 데이터를 삭제

// delete 메서드
// - 전달된 키에 해당하는 요소를 Map에서 삭제

console.log(personData.size);

// ----------------------------------------------------
// WeakSet & WeakMap
// WeakSet
// - 정확히 객체 데이터를 저장해야함
// - 내부적으로만 객체를 저장할 수 있으므로 실제로는 해당 객체를 지우는 것임
// - 가비지 컬렉션으로 Set에 포함되어 있는 해당 항목을 직접 삭제해서 더 이상 코드의 일부로 남아 있지 않도록 함
// => Set에 저장한 객체 데이터 중 사용하지 않게 된 데이터의 일부는 직접 내보내서 해당 데이터가 가비지로 수집되게 함

let person = { name: "Max" };
const persons = new WeakSet();
persons.add(person);

// ...some operations
// 아래와 같이 이 객체를 지정해 놓은 모든 위치를 리셋했다면
// Set도 더 이상 해당 객체를 저장해 두지 않고 삭제함
person = null;

console.log(persons);
