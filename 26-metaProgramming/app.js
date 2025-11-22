// 심볼형

// Libray land
const uid = Symbol(); //새로운 심볼 생성
console.log(uid);

const user = {
  //   id: "p1",
  [uid]: "p1",
  name: "Max",
  age: 30,
  // 태그를 값으로 정의할 수 있게 함. 메서드 출력을 변경할 수 있음
  [Symbol.toStringTag]: "User", // [object User]
};

user[uid] = "p3"; // 변경값 적용됨

// app land => Using the library

user.id = "p2"; // Symbol 로 설정된 uid 를 프로퍼티로 설정시 이 코드는 발생하지 않음

console.log("1", user); // 객체 내의 [uid] 에 접근하여 해당 값을 'p2'로 변경할 수 없음

console.log(user[Symbol("uid")]); // undefined 왜냐? 디버깅 목적으로만 해당 형태로 사용하고 엄밀히 따지면 새로운 심볼이 생성된 것임

console.log(Symbol("uid") === Symbol("uid")); // false

console.log(user);

console.log(user.toString()); // 객체 -> 문자열 변환

// ----------------------------------------------------------------------------------------------------------------

// 반복자와 제너레이터

// 1. 반복자
// - next 메서드를 가진 객체

const company = {
  curEmployees: 0,
  employees: ["Max", "Manu", "Anna"],
  next() {
    if (this.curEmployees >= this.employees.length) {
      return { value: this.curEmployees, done: true };
    }
    const returnValue = {
      value: this.employees[this.curEmployees],
      done: false,
    };
    this.curEmployees++;
    return returnValue;
  },
};

// console.log(company.next());
// console.log(company.next());
// console.log(company.next());
// console.log(company.next());
// console.log(company.next());

// 대신해서 while문을 사용할 수도 있음

let employee = company.next(); // 반복자 논리 생성

while (!employee.done) {
  console.log(employee.value);
  employee = company.next();
}
