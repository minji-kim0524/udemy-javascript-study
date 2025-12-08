// 계산기 로직

// 계산결과 로직
// 상수
// - 변수를 수정해도 상수 원본과 값은 바뀌지 않음
const defaultResult = 0;
// 변수 선언 및 초기화
let currentResult = defaultResult;
let logEntries = [];

// 함수 선언(정의)
// 실행 가능한 코드에 중괄호가 있는 경우에는 중괄호 뒤에 세미콜론을 사용하지 않음
// 매개변수는 함수 본문 내에서만 사용가능함
// - 함수 정의 위치는 크게 상관없음
// - 함수 외부에 정의된 변수 및 상수에 접근할 수 있음

// 반복 및 재사용되는 로직 분리 --------------------------------------------
// Gets input from input field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

// Generate and wirtes calculation log
function createAndWriteLog(operator, resultBeforeCalc, calcNumber) {
  const calcDesscription = `${resultBeforeCalc} ${operator} ${calcNumber}`; // 템플릿 리터럴에 들어오는 값은 숫자라 하더라도 자동으로 문자열로 처리됨
  outputResult(currentResult, calcDesscription); // from vendor file
}

// ------------------------------------------------------------------

// 사칙연산 로직---------------------------------------------------------
// 덧셈
function add() {
  // 로컬 스코프(블록 스코프)
  // - 함수 내부에 선언된 로컬 및 블록 스코프 변수는 외부에서 사용할 수 없음
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteLog("+", initialResult, enteredNumber);
  //   alert("The result is " + result);
  const logEntry = {
    operation: "ADD",
    prevResult: initialResult,
    number: enteredNumber,
    result: currentResult,
  };
  // 배열에 요소 추가 (push)
  logEntries.push(logEntry);
  console.log(logEntries);
  // 배열의 특정요소 접근방법
  // - 배열 변수명 뒤에 요소의 위치를 입력한 대괄호 기재
  // - 배열 또는 배열의 인덱스는 '0'부터 시작함
  //   console.log(logEntries[0]);
}

// 뺄셈
function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteLog("-", initialResult, enteredNumber);
}

// 곱하기
function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteLog("*", initialResult, enteredNumber);
}

// 나눗셈
function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteLog("/", initialResult, enteredNumber);
}

// ------------------------------------------------------------------

// 함수 호출
// add(1, 2);
// add(5, 5);

// currentResult = add(1, 2);

// currentResult = ((currentResult + 10) * 3) / 2 - 1;

// 템플릿 리터럴 사용 (백틱)
// - 줄바꿈 적용가능
// let calculationDescription = `(${defaultResult}+ 10) * 3 / 2 -1`;

// 일반 따옴표 사이의 문자열은 공백이나 줄바꿈이 적용되지 않음
// - 줄 바꿈 적용을 위해서는 특수문자 사용이 필요함 -> \n(백슬래시n)
// let errorMessage = "An error \n" + "occurred!";

// 브라우저 내장함수 addEventListener
// - 첫번째 인자: 리스닝하고자 하는 이벤트를 식별하는 문자열
// - 두번재 인자: 버튼 클릭시 실행되어야하는 함수
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
