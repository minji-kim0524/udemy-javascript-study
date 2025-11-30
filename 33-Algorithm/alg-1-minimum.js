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

const testNumbers = [3];

const min = getMin(testNumbers);

console.log(min);
