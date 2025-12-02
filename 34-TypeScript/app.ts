// 방법1.
// class User {
//   // 필드
//   name: string; // 아무것도 설정하지 않을 경우, 기본값은 public
//   private age: number; // private 설정시, 클래스 내부에서만 사용가능

//   // 프로퍼티
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

interface Greetable {
  name: string;
}

interface Printable {
  print(): void;
}

// 방법2.
// - 인터페이스로 확장시, 클래스는 인터페이스가 요구하는 것보다 더 많이 추가할 수 있으나,
// 더 적게 추가할 수는 없음
class User implements Greetable, Printable {
  constructor(public name: string, private age: number) {}

  print() {
    console.log(this.name);
  }
}

// 클래스 상속
class Admin extends User {
  constructor(name: string, age: number, private permissions: string[]) {
    super(name, age);
  }
}

const num1Input = document.getElementById("num1") as HTMLInputElement;
const num2Input = <HTMLInputElement>document.getElementById("num2");
const buttonElement = document.querySelector("button")!;

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

// 자체타입 생성 << 인터페이스(interface) 활용
// - new 키워드 사용불가
// - 객체에 대한 블루프린트로 사용
// - 클래스가 특정 구조를 갖도록 특정 프로퍼티를 가져오게 강제성을 띄게함
// - 사용이유: 추가 타입 안정성을 주고 특정 클래스를 보장함
interface CalculationContainer {
  res: number;
  print(): void;
}

// 자체타입 생성 << 타입 별칭(Type Alias)
// type CalculationResults = { res: number; print: () => void }[];

type CalculationResults = CalculationContainer[];

// Promise 유형
// - fetch API를 이용하여 데이터를 반환하는 유형

// 아래에서 '[]'의 배열부분을 '제네릭 유형' 이라고 함
// - 형태예시: Array<T> << 여기서 <T>에 배열의 타입을 명시함
// - 배열과 프로미스는 빌트인 제네릭 유형으로 자체 제네릭 유형을 설계할 수 있음
const results: Array<CalculationContainer> = [];
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

// 제네릭 함수
// - 특정 타입에 얽매이지 않고 다양한 타입의 인수를 처리할 수 있도록 하는 함수
function logAndEcho<T>(val: T) {
  console.log(val);
  return val;
}

// 위 제네릭 함수 활용 예시
logAndEcho<string>("Hi there!").split(" ");
