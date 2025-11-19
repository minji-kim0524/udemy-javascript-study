// import "core-js/features/promise";
// seBuiltIns: "entry" 로 설정시 추가해야하는 내용
// import "core-js/stable";
// import "regenerator-runtime/runtime";

const button = document.querySelector("button");
const textParagraph = document.querySelector("p");

button.addEventListener("click", () => {
  const text = textParagraph.textContent;
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(text)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    alert("Feature not available, please copy manually");
  }
  // do something...
});

// 폴리필 : 브라우저에서 누락된 기능을 추가해주는 패키지

// 트랜스파일링 : 코드를 트랜스파일(변환) 하는 것.
// - 대표적인 도구 : Babel
// - 최신 코드 -> 구형 코드로 변환진행
