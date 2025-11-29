// jest 테스트에 import 하는 네이티브 방법
// 구조분해할당 구문
// - jest 에서는 ES6에서 지원하는 import 구문이 아닌 Node.js를 사용함
// - import구문 사용불가는 아니지만, 더 복잡한 워크플로우 빌드와 추가적인 패키지가 필요함
// (현재 강의에서는 Node.js로 사용)
const { generateText, checkAndGenerate } = require("./util");

// test 함수 (Jest 제공)
// - 첫번째 인자: 테스트명이나 테스트에 대한 설명
// - 두번째 인자: 테스트 실행을 위한 익명 함수. 즉, 테스팅 코드

test("should output name and age", () => {
  const text = generateText("Max", 29);
  // Jest가 제공하는 출력값 테스트 함수
  expect(text).toBe("Max (29 years old)");
  // 하나의 항목에 대한 다중 유닛 테스트도 가능
  const text2 = generateText("Anna", 28);
  expect(text2).toBe("Anna (28 years old)");
});

test("should output data-less text", () => {
  const text = generateText("", null);
  expect(text).toBe(" (null years old)");
});

// 유닛 테스트와 함수명을 제외하고는 동일한 형태지만, 함수를 살펴보면 통합 테스트임
test("should generate a valid text output", () => {
  const text = checkAndGenerate("Max", 29);
  expect(text).toBe("Max (29 years old)");
});
