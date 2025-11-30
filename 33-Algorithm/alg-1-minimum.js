function getMin(numbers) {
  if (!numbers.length) {
    throw new Error("Should not be an empty array!");
  }
  // for문과 중복되는 내용이므로 주석 또는 삭제처리
  // if (numbers.length === 1) {
  //     return numbers[0]
  // }
  let currentMinimum = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < currentMinimum) {
      currentMinimum = numbers[i];
    }
  }

  return currentMinimum;
}

const testNumbers = [3];

const min = getMin(testNumbers);

console.log(min);
