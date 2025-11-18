// 쿠키 학습
// HTTPRequest 에 연결되었음
// 웹 페이지가 실제 서버로 제공되는 경우에만 사용 가능함

console.log(document.cookie);

const storeBtn = document.getElementById("store-btn");
const retrBtn = document.getElementById("retrieve-btn");

storeBtn.addEventListener("click", () => {
  const userId = "u123";
  // 쿠키 추가 (교체x)
  document.cookie = `uid=${userId}`;
});

retrBtn.addEventListener("click", () => {});
