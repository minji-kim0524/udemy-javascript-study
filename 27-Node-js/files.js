// Node.js
// - 브라우저 외부에서 실행되는 JavaScript
// - 파일 시스템을 읽고 파일을 분석할 수 있음

// 아래 console.log 는 브라우저와 node.js 환경 모두에서 작동함
console.log("Hello world!");

const userName = "Max";

console.log(`Hi ${userName}!`);

// ----------------------------------------------------------------

const fs = require("fs");

fs.readFile("user-data.txt", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data.toString());
});

fs.writeFile("user-data.txt", "username=Max", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Wrote to file!");
  }
});
