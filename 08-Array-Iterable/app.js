// 배열 생성방법 1. 대괄호 표기법 ✅
const numbers = [1, 2, 3];
console.log(numbers);

// 배열 생성방법 2. new 생성자함수 사용
// const moreNumbers = new Array(); // []
// console.log(moreNumbers);

// 배열을 만드는 방식인 new Array에 '단일 숫자'만을 입력하면
// 만들어질 배열에 대한 길이로 표시됨

// const moreNumbers = new Array(5); // [empty x 5] length:5
// console.log(moreNumbers);

// 배열 생성방법 3. Array.of()
// const yetMoreNumbers = Array.of(1, 2);
// console.log(yetMoreNumbers); // (2) [1, 2] length:2

// 배열 생성방법 4. Array.from() ✅
// - 인수를 여러개 넣는 것이 아니라 '이터러블' 이나 '유사 배열 객체' 가 들어감
// - DOM에 노드 리스트나 HTML collection에 선택하고 싶은 여러 요소가 있을 경우 사용
const listItems = document.querySelectorAll("li");
console.log(listItems); // NodeList(3)

// 사용 예시
const moreNumbers = Array.from("Hi!");
const arrayListItems = Array.from(listItems);
console.log(moreNumbers); // (3) ["H", "i", "!"]
console.log(arrayListItems);

// 배열 저장
// const hobbies = ["Cooking", "Sports"];
const personalData = [30, "Max", { moreDetail: [] }];

// 중첩 또는 다차원 배열
const analyticsData = [
  [1, 1.6],
  [-5.4, 2.1],
];

// 중첩 배열의 반복문
for (const data of analyticsData) {
  // [1, 1.6], [-5.4, 2.1]
  for (const dataPoint of data) {
    // 1, 1.6, -5.4, 2.1
    console.log(dataPoint);
  }
}

// 배열은 인덱스를 기반으로 함
console.log(personalData[1]); // "Max"

// 배열에 데이터 추가하기
const hobbies = ["Sports", "Cooking"];
// - push: 배열의 마지막에 추가
hobbies.push("Reading");
console.log(hobbies); // ["Sports", "Cooking", "Reading"]]

// - unshift: 배열의 첫 부분에 추가
hobbies.unshift("Coding");
console.log(hobbies); // ["Coding", "Sports", "Cooking", "Reading"]

// - pop: 배열의 마지막 요소 제거
const poppedValue = hobbies.pop();
console.log(hobbies); // ["Coding", "Sports", "Cooking"]

// - shift: 배열의 첫번째 요소 제거
hobbies.shift();
console.log(hobbies); // ["Sports", "Cooking"]

// 특정 위치의 요소 교체하기
hobbies[1] = "Coding";
console.log(hobbies); // ["Sports", "Coding"]

// - splice: 두 요소사이에 요소 추가하기
hobbies.splice(0, 0, "Good Food");
console.log(hobbies); // ["Good Food", "Sports", "Coding"]

// - splice: 특정 위치의 요소 삭제하기
// hobbies.splice(0, 1);
// 삭제한 요소를 반환도 함
const removeElements = hobbies.splice(0, 1);
console.log(removeElements); // ["Good Food"]
// 음수 인덱스 지정가능 -> 지정시 배열의 끝으로 이동하여 오른쪽부터 확인
// 항목 개수 미설정시 모든 항목 삭제 -> 빈배열 반환
// hobbies.splice(0) // []
console.log(hobbies); // ["Sports", "Coding"]

// ----------------------------------------------------
const testResults = [1, 5.3, 1.5, 10.99, -5, 10];

// slice() 메서드
// - 배열을 복사하여 새로운 배열을 만들어냄
const storedResults = testResults.slice(); // 복사본 생성

testResults.push(5.91);
console.log(storedResults, testResults);

// - 인덱스를 활용하여 배열 범위 선택이 가능함
// 단, 시작 인덱스는 포함이나 끝 인덱스는 미포함 -> 끝 인덱스는 시작 인덱스보다 커야함
const storedResults2 = testResults.slice(0, 2);
