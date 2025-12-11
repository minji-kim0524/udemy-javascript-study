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
const hobbies = ["Cooking", "Sports"];
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
