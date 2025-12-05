// 계산기 로직

// 계산결과 로직
// 상수
// - 변수를 수정해도 상수 원본과 값은 바뀌지 않음
const defaultResult = 0;
// 변수 선언 및 초기화
let currentResult = defaultResult;

currentResult = ((currentResult + 10) * 3) / 2 - 1;

// 템플릿 리터럴 사용 (백틱)
// - 줄바꿈 적용가능
let calculationDescription = `(${defaultResult}+ 10) * 3 / 2 -1`;

// 일반 따옴표 사이의 문자열은 공백이나 줄바꿈이 적용되지 않음
// - 줄 바꿈 적용을 위해서는 특수문자 사용이 필요함 -> \n(백슬래시n)
let errorMessage = "An error \n" + "occurred!";

outputResult(currentResult, errorMessage);
