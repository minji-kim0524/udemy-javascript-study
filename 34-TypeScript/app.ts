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

type PrintMode = "console" | "alert";
enum OutputMode {
  CONSOLE,
  ALERT,
}

// function printResult(result: string | number, printMode: PrintMode) {
//   if (printMode === "console") {
//     console.log(result);
//   } else if (printMode === "alert") {
//     alert(result);
//   }
// }

// 이넘(enum) 타입활용 예시
function printResult(result: string | number, printMode: OutputMode) {
  if (printMode === OutputMode.CONSOLE) {
    console.log(result);
  } else if (printMode === OutputMode.ALERT) {
    alert(result);
  }
}

// const result = add(5, 3);
// let isDone = false;

// console.log(result);

// 자체타입 생성 << 타입 별칭(Type Alias)
type CalculationResults = { res: number; print: () => void }[];

const results: CalculationResults = [];
const names = ["Max"];

buttonElement.addEventListener("click", () => {
  // 앞에 '+' 표시를 추가하면 문자열을 숫자로 변환할 수 있음
  const num1 = +num1Input.value;
  const num2 = +num2Input.value;
  const result = add(num1, num2);
  const resultContainer = {
    res: result,
    print() {
      console.log(this.res);
    },
  };

  results.push(resultContainer);
  // results.push(5);
  // printResult(results);
  // results[0].print();
  printResult(result, OutputMode.CONSOLE);
  printResult(result, OutputMode.ALERT);
});
