// 쿠키 학습
// HTTPRequest 에 연결되었음
// 웹 페이지가 실제 서버로 제공되는 경우에만 사용 가능함
// 장점 : 만료되도록 설정가능, 요청과 함께 서버에 보낼 수 있음

// console.log(document.cookie);

const storeBtn = document.getElementById("store-btn");
const retrBtn = document.getElementById("retrieve-btn");

storeBtn.addEventListener("click", () => {
  const userId = "u123";
  const user = { name: "Max", age: 30 };
  // 쿠키 추가 (교체x)
  // max-age : 쿠키 유지시간 (초 단위)
  // expires : 쿠키 유효기간 (고장 날짜 형식)
  document.cookie = `uid=${userId}; max-age=360`;
  document.cookie = `user=${JSON.stringify(user)}`;
});

retrBtn.addEventListener("click", () => {
  const cookieData = document.cookie.split(";");
  const data = cookieData.map((i) => {
    return i.trim();
  });
  console.log(data[1].split("=")[1]); // user value
});
