// 계산기 로직

// 계산결과 로직
// 상수
// - 변수를 수정해도 상수 원본과 값은 바뀌지 않음
const defaultResult = 0;
// 변수 선언 및 초기화
let currentResult = defaultResult;

// 함수 선언(정의)
// 실행 가능한 코드에 중괄호가 있는 경우에는 중괄호 뒤에 세미콜론을 사용하지 않음
// 매개변수 num1, num2는 함수 본문 내에서만 사용가능함
function add(num1, num2) {
  const result = num1 + num2;
  //   alert("The result is " + result);
  return result;
}

// 함수 호출
// add(1, 2);
// add(5, 5);

currentResult = add(1, 2);

// currentResult = ((currentResult + 10) * 3) / 2 - 1;

// 템플릿 리터럴 사용 (백틱)
// - 줄바꿈 적용가능
let calculationDescription = `(${defaultResult}+ 10) * 3 / 2 -1`;

// 일반 따옴표 사이의 문자열은 공백이나 줄바꿈이 적용되지 않음
// - 줄 바꿈 적용을 위해서는 특수문자 사용이 필요함 -> \n(백슬래시n)
// let errorMessage = "An error \n" + "occurred!";

outputResult(currentResult, calculationDescription);
