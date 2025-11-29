// 1. 절차지향 프로그래밍
const form = document.getElementById("user-input");

function signupHandler(event) {
  event.preventDefault();

  const userNameInput = document.getElementById("username");
  const enteredUsername = userNameInput.value;

  const passwordInput = document.getElementById("password");
  const enteredPassword = passwordInput.value;

  // 유효성 검사
  if (enteredUsername.trim().length === 0) {
    alert("Invalid input - username must not be empty!");
    return; // 함수실행을 취소하여 코드실행을 중지 시키는 목적
  }

  if (enteredPassword.trim().length <= 5) {
    alert("Invalid input - password must not be six characters or longer.");
    return; // 함수실행을 취소하여 코드실행을 중지 시키는 목적
  }

  const user = {
    userName: enteredUsername,
    password: enteredPassword,
  };

  console.log(user);
  console.log("Hi, I am " + user.userName);
}

form.addEventListener("submit", signupHandler);
