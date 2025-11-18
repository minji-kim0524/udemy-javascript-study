// 로컬 스토리지
// 기본 데이터 저장하는 키-값 스토리지

const storeBtn = document.getElementById("store-btn");
const retrBtn = document.getElementById("retrieve-btn");

const userId = "u123";
const user = {
  name: "Max",
  age: 30,
  hobbies: ["Sports", "Cooking"],
};

// localStorage - 삭제되지 않음
// sessionStorage - 탭을 닫거나 브라우저를 닫으면 저장된 값이 삭제됨

storeBtn.addEventListener("click", () => {
  sessoinStorage.setItem("uid", userId);
  localStorage.setItem("uid", JSON.stringify(user));
  console.log("클릭됨");
});

retrBtn.addEventListener("click", () => {
  const extractedId = localStorage.getItem("uid");
  const extractedUser = JSON.parse(localStorage.getItem("user"));
  console.log(extractedUser);
  if (extractedId) {
    console.log("Got the id -" + extractedId);
  } else {
    console.log("Could not find id");
  }
});
