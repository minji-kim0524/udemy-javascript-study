// 계산기 로직

// 계산결과 로직
// 상수
// - 변수를 수정해도 상수 원본과 값은 바뀌지 않음
const defaultResult = 0;
// 변수 선언 및 초기화
let currentResult = defaultResult;

currentResult = ((currentResult + 10) * 3) / 2 - 1;

let calculationDescription = "(" + defaultResult + "+ 10) * 3 / 2 -1";

outputResult(currentResult, calculationDescription);
