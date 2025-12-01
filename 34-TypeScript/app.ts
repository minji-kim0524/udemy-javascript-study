const num1Input = document.getElementById("num1") as HTMLInputElement;
const num2Input = <HTMLInputElement>document.getElementById("num2");
const buttonElement = document.querySelector("button");

function add(a: number, b: number) {
  return a + b;
}

// 함수가 반환하는 값이 아무것도 없음을 표시 => 'void'
// 해당 함수에 return문이 없다는 의미임(반환하는 값이 없다 === return문이 없다)
// function printResult(result): void {
//   console.log(result);
// }

function printResult(result) {
  console.log(result);
}

// const result = add(5, 3);
// let isDone = false;

// console.log(result);

buttonElement.addEventListener("click", () => {
  // 앞에 '+' 표시를 추가하면 문자열을 숫자로 변환할 수 있음
  const num1 = +num1Input.value;
  const num2 = +num2Input.value;
  const result = add(num1, num2);
  printResult(result);
});
