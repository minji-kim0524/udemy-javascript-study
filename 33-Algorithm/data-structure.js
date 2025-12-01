// 데이터 구조
const age = [30, 29, 54];

// 데이터 구조의 연산마다 시간 복잡도가 다름

age.push(60); // Constant Time Complexity: O(1)
// - 상수 시간 복잡도인 이유: 항목을 새로 추가해도 다른 항목에 변화가 생기지 않음 (영향x)

age.unshift(10); // Linear Time Complexity: O(n)
// - 이유: 자리가 한자리씩 밀리면서 새로운 인덱스를 할당 받음 -> 다른 항목에 변화가 생김 (영향o)

const myAge = age[1]; // Constant Time Complexity: O(1)
// - 이유: 항목이 어떤 인덱스에 있는지 알면 JavaScript가 메모리 내에서 바로 해당 위치로가서 찾으면 됨

// ---------------------------------------------------------------------------

const namePopularity = [
  { userName: "max", usages: 5 },
  { userName: "manu", usages: 6 },
];

const manuUsages = namePopularity.find(
  (pers) => pers.userName === "manu"
).usages;
// BEST CASE: Constant Time Complexity => O(1)
// WORST CASSE: Linear Time Complexity => O(n)
// AVERAGE CASE: Linear Time Complexity => O(n)

console.log(manuUsages);

// ---------------------------------------------------------------------------

const nameMap = {
  max: 5,
  manu: 6,
};

const manuUsages2 = nameMap["manu"]; // Constant Time Complexity => O(1)

// JavaScript 빌트인 데이터 구조
// const nameRealMap = new Map();
