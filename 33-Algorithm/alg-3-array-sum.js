// 배열 추가 알고리즘
function sumUp(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}

// Linear Time Complexity = O(n)

const array = [1, 2, 3];

// 해당 알고리즘의 목표
console.log(sumUp(array)); // 6
