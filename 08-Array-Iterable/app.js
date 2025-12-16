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
// const storedResults = testResults.slice(); // 복사본 생성

// testResults.push(5.91);
// console.log(storedResults, testResults);

// - 인덱스를 활용하여 배열 범위 선택이 가능함
// 단, 시작 인덱스는 포함이나 끝 인덱스는 미포함 -> 끝 인덱스는 시작 인덱스보다 커야함
// const storedResults2 = testResults.slice(0, 2);

// ----------------------------------------------------
// concat() 메서드
// - concat에 보내는 배열의 모든 요소를 기본 배여레 새로운 요소로 추가하여
// 새로운 배열을 반환함 -> 즉, 배열의 복사본을 반환함
// - 배열의 데이터를 기존의 배열에 합칠 때 유용함
const storedResults = testResults.concat([3.99, 2]);

testResults.push(5.91);

console.log(storedResults, testResults);

// ----------------------------------------------------
// indexOf()
// - 배열 내에서 일치하는 첫번째 요소의 인덱스를 반환하고 종료됨
console.log(testResults.indexOf(1.5));

// includes() 메서드
// - 불리언값(true/false)을 반환함 -> 배열의 일부인지를 확인할 때 유용함
console.log(testResults.includes(10.99)); // true

// lastIndexOf()
// - 배열의 오른쪽부터 검색시 사용

// indexOf(), lastIndexOf()
// - 원시값에 대해서는 실행되지만, 참조값에 대해서는 실행되지 않음 -> 객체가 있으면 실행되지않음
// - 해당되는 어떤 요소도 찾기 못하면 '-1' 을 반환함

const personData = [{ name: "Max" }, { name: "Manuel" }];
console.log(personData.indexOf({ name: "Manuel" }));

// ----------------------------------------------------
// find() 메서드
// - 익명 함수를 인자로 가짐
// - 배열의 객체와 동일한 객체를 반환하며 복사하지는 않음
const manuel = personData.find((person, idx, persons) => {
  return person.name === "Manuel";
});

console.log(manuel);

// findIndex() 메서드
const maxIndex = personData.findIndex((person, idx, persons) => {
  return person.name === "Max";
});

console.log(maxIndex);

// ----------------------------------------------------
// forEach() 메서드
const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
// const taxAdjustedPrices = [];

// for of 반복문
// for (const price of prices) {
//   taxAdjustedPrices.push(price * (1 + tax));
// }

// forEach()문
// - for of 반복문에서는 할 수 없는 인덱스에 엑세스 할 수 있다는 장점이 있음
// prices.forEach((price, idx, prices) => {
//   const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
//   taxAdjustedPrices.push(priceObj);
// });

// console.log(taxAdjustedPrices);

// map() 메서드
// - 배열의 각 요소에 관해 전환 가능한 새 요소를 반환해야함
// -> forEach() 와의 차이점이 바로 "반환값" 이 있다는 것임

const taxAdjustedPrices = prices.map((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
  return priceObj;
});

console.log(taxAdjustedPrices);

// sort() 메서드
// - 배열 정렬 메서드
// - 기본적으로 전체를 문자열로 변환하여 문자열 논리로 정렬을 진행함
const sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return -1;
  } else if (a === b) {
    return 0;
  } else {
    return 1;
  }
});
// console.log(sortedPrices.reverse());
// reverse() 를 사용하지 않고 sort() 의 논리만 수정하면 그대로 출력해도 문제없음
console.log(sortedPrices);

// ----------------------------------------------------
// filter()
// - 배열의 요소를 필터링
// - 기존 배열은 유지하면서 새로운 배열이 반환됨(복사본 생성)
// - 인자로 전달한 함수에서 값이 반환되는 메서드
// - 필터조건에 true인 값들만 남고 false인 값들은 삭제됨
// const filterArray = prices.filter((price, index, prices) => {
//   return price > 6;
// });

// 화살표 함수 적용
const filterArray = prices.filter((p) => p > 6);

console.log(filterArray);

// ----------------------------------------------------
// reduce() 메서드
// - 첫번째 인수: 함수
// - 두번째 인수: 시작하려는 초기값
// - 배열의 값을 단일 값으로 결합할 때 매우 유용함

// let sum = 0;

// prices.forEach((price) => {
//   sum += price;
// });

// console.log(sum);

// - prevValue: 설정한 초기값 (reduce 메서드의 두번째 인수를 가리킴) -> 미설정시 'undefined'
// - curValue: 현재 실행하고 있는 배열의 첫번째 요소
const sum = prices.reduce((prevValue, curValue, curIndex, prices) => {
  return prevValue + curValue;
}, 0);

// 위 reduce 함수를 화살표 함수로 변환시
const sum2 = prices.reduce((prevValue, curValue) => prevValue + curValue, 0);

console.log(sum);
console.log(sum2);

// ----------------------------------------------------

const data = "new york;10.99;2000";

// split() 메서드
// - 문자열을 구분자로 구분하여 배열로 반환
const transformedData = data.split(";");
console.log(transformedData);

// join() 메서드
// - 쪼개진 배열요소를 하나의 문자열로 합쳐서 반환
const nameFragments = ["Max", "Schwarz"];
const name = nameFragments.join(" ");
console.log(name);

// ----------------------------------------------------
// 전개구문이란?
// - 연산자가 아닌 배열의 모든 요소를 꺼내 배열의 복사본을 생성함
// - 요소를 메서드의 인자 리스트로 복사하고 배분하는 데 매우 유용한 도구
const copiedNameFragments = [...nameFragments];
nameFragments.push("Mr");
console.log(nameFragments, copiedNameFragments);

// Math 메서드
// - 배열이 아닌 숫자만 인자로 전달해야함
console.log(Math.min(...prices));

const persons = [
  { name: "Max", age: 30 },
  { name: "Manuel", age: 31 },
];
// const copiedPersons = [...persons];
const copiedPersons = persons.map((person) => ({
  name: person.name,
  age: person.age,
}));

persons.push({ name: "Anna", age: 29 });
persons[0].age = 31;

console.log(persons, copiedPersons);

// ----------------------------------------------------
// 배열 구조 분해
// - 배열을 작업하기 원하는 변수로 분리할 때 사용하는 구문
const nameData = ["Max", "Schwarz", "Mr", 30];

const [firstName, lastName, ...otherInformation] = nameData;
console.log(firstName, lastName, otherInformation);
