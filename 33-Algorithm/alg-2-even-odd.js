// 짝수, 홀수 여부를 확인하는 알고리즘
function isEvenOrOdd(number) {
  // 방법1.
  //   const result = number % 2;
  //   if (result === 0) {
  //     return "Even";
  //   } else {
  //     return "Odd";
  //   }

  // 방법2. 삼항연산자 활용
  return number % 2 ? "Odd" : "Even";
}

// 상수 시간 복잡도(Constant Time Complexity) -> 빅 오 표기법으로 표기할 경우, 'O(1)' 으로 표기가능

// 해당 알고리즘의 목표
console.log(isEvenOrOdd(10)); // 'Even'
console.log(isEvenOrOdd(11)); // 'Odd'
