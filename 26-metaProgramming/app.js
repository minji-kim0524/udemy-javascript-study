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
  //   curEmployees: 0,
  employees: ["Max", "Manu", "Anna"],
  //   next() {
  //     if (this.curEmployees >= this.employees.length) {
  //       return { value: this.curEmployees, done: true };
  //     }
  //     const returnValue = {
  //       value: this.employees[this.curEmployees],
  //       done: false,
  //     };
  //     this.curEmployees++;
  //     return returnValue;
  //   },
  // 2. 제너레이터 사용
  // - function* 형태로 쓰임
  // - 새로운 객체를 생성함
  [Symbol.iterator]: function* employeeGenerator() {
    // 루핑(반복) 로직
    // let employee = company.next(); // 반복자 논리 생성

    // while (!employee.done) {
    //   //   console.log(employee.value);
    //   yield employee.value;
    //   employee = company.next();
    // }

    // ---------------------------------------
    // 다른 방법
    // 키워드 yield 은 return(반환) 의 의미라고 볼 수 있음
    // - 해당 함수 호출에 대한 결과를 반환하게 하는 기능
    // - return 대신 사용하는 이유: 일반 함수가 아니고 제너레이터 함수이기 때문
    // - pause 기능이 있어서 함수가 재실행될 때 다시 처음부터 실행되는 것이 아니라, 일시정지됐던 시점부터 다시 시작됨
    let currentEmployee = 0;
    while (currentEmployee < this.employees.length) {
      yield this.employees[currentEmployee];
      currentEmployee++;
    }
  },
};

// console.log(company.next());
// console.log(company.next());
// console.log(company.next());
// console.log(company.next());
// console.log(company.next());

// 대신해서 while문을 사용할 수도 있음

// let employee = company.next(); // 반복자 논리 생성

// while (!employee.done) {
//   console.log(employee.value);
//   employee = company.next();
// }

// for...of문을 사용한 방법

for (const employee of company) {
  console.log(employee);
}

// const it = company.getEmployee();

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

const persons = ["Max", "Manu"];
console.log(persons);

// ----------------------------------------------------------------------------------------------------------------
// Reflect API
// - Object API 는 레거시이고 Reflect API 는 최신(ES6 에 추가)이다.
// Object APi 와의 차이점
// - 주어진 메서드에 대해 true/false 를 반환하며 작동여부를 알려주고 에러를 표시해줌
// (Object API에서는 정의되지 않았다고 반환 || 에러 알림 없음)
// - 객체를 구성하고 작업하는데 필요한 모든 메서드들을 그룹화 해줌
// (Obejct API에는 deleteProperty가 없음 -> 별도의 키워드인 delete 를 사용해야하는 번거로움 발생)

const course = {
  title: "JavaScript - The Complete Guide",
};

Reflect.setPrototypeOf(course, {
  toString() {
    return this.title;
  },
});

// console.log(course.toString());

Reflect.defineProperty(course, "price", {});

console.log(course.toString());

// ----------------------------------------------------------------------------------------------------------------
// Proxy API
// - 특정 연산에 개입하고 자신만의 코드실행이 가능함

const courseHandler = {
  get(obj, propertyName) {
    console.log(propertyName);
    if (propertyName === "length") {
      return 0;
    }
    return obj[propertyName] || "NOT FOUND";
  },
  set(obj, propertyName, newValue) {
    if (propertyName === "rating") {
      return;
    }
    obj[propertyName] = newValue;
  },
};

// 프록시 생성
const pCourse = new Proxy(course, courseHandler);
pCourse.rating = 5;
console.log(pCourse.title, pCourse.length, pCourse.rating);
