function getMin(numbers) {
  if (!numbers.length) {
    throw new Error("Should not be an empty array!");
  }
  // for문과 중복되는 내용이므로 주석 또는 삭제처리
  // if (numbers.length === 1) {
  //     return numbers[0]
  // }
  let currentMinimum = numbers[0];
  console.log("EXECUTION - INIT"); // 실행횟수 확인용

  for (let i = 1; i < numbers.length; i++) {
    console.log("EXECUTION - FOR"); // 실행횟수 확인용
    if (numbers[i] < currentMinimum) {
      currentMinimum = numbers[i];
    }
  }

  console.log("EXECUTION - RETURN"); // 실행횟수 확인용
  return currentMinimum;
}

// 알고리즘에서는 입력값에 따라 달라지는 부분이 중요함 << 성능에 영향을 미침
// 실행횟수에 따라 총 3개의 블록으로 나눌 수 있음(if문 / for문 / return문)
// T(time) = n (입력값에 따라 달라지는 부분의 실행횟수/동적인 부분)
// 위에서 횟수(n)는 선형적으로 배열의 길에 따라 달라짐 => '선형 시간 복잡도(Linear Time Complexity)' 라고함
// - 즉, 더 많은 항목을 입력할수록 소요되는 시간의 증가폭이 선형적으로 늘어남
// 일반적으로 이를 '빅 오(Big O) 표기법'으로 표시함 => 위 내용을 해당 표기법으로 나타내면 'O(n)' 으로 표기가능

// ----------------------------------------------------------------------------------
// 다른 방법 - 배열을 오름차순으로 정렬한 후 첫 번째 요소 반환하기
function getMin2(numbers) {
  if (!numbers.length) {
    throw new Error("Should not be an empty array!");
  }

  let sortedNumbers;

  for (let i = 0; i < numbers.length; i++) {
    let outerElement = numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
      let innerElement = numbers[j];

      if (outerElement > innerElement) {
        // swap (자리바꾸기)
        numbers[i] = innerElement;
        numbers[j] = outerElement;

        outerElement = numbers[i];
        innerElement = numbers[j];

        // console.log(numbers[i], numbers[j]);
      }
    }
  }

  return numbers[0];
}

// 2차 시간 복잡도(Quadratic Time Complexity)
// T = n*n* => O(n^2)

const testNumbers = [3];

const min = getMin(testNumbers);

console.log(min);
