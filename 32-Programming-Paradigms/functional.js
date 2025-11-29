// 3. 함수형 프로그래밍
// - 함수로 코드를 구성하여 해당 함수를 공유하거나 내보내기 또는 임포트를 통해
// 논리를 다른 파일에 그대로 재사용하거나 공유 할 수 있는 프로그래밍 방식

const REQUIRED = "REQUIRED";
const MIN_LENGTH = "MIN_LENGTH";

function validate(value, flag, validatorValue) {
  if (flag == REQUIRED) {
    return value.trim().length > 0;
  }
  if (flag === MIN_LENGTH) {
    return value.trim().length > validatorValue;
  }
}

function getUserInput(inputElementId) {
  return document.getElementById(inputElementId).value;
}

function createUser(userName, userPassword) {
  if (!validate(userName, REQUIRED) || !validate(userPassword, MIN_LENGTH, 5)) {
    throw new Error(
      "Invalid input - username or password is wrong (password should be at least six characters"
    );
  }

  return {
    userName: userName,
    password: userPassword,
  };
}

function greetUser(user) {
  console.log("Hi, I am" + user.userName);
}

function signupHandler(event) {
  event.preventDefault();

  const enteredUsername = getUserInput("username");
  const enteredPassword = getUserInput("password");

  try {
    const newUser = createUser(enteredUsername, enteredPassword);
    // console.log(newUser);
    greetUser(newUser);
  } catch (err) {
    alert(err.message);
  }
}

function connectForm(formId, formSubmitHandler) {
  const form = document.getElementById(formId);
  form.addEventListener("submit", formSubmitHandler);
}

connectForm("user-input", signupHandler);
