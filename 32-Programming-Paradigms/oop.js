// 2. 객체지향 프로그래밍
class Validator {
  static REQUIRED = "REQUIRED";
  static MIN_LENGTH = "MIN_LENGTH";

  //   인스턴스화하지 않고 호출할 수 있다는 뜻
  static validate(value, flag, validatorValue) {
    if (flag == this.REQUIRED) {
      return value.trim().length > 0;
    }
    if (flag === this.MIN_LENGTH) {
      return value.trim().length > validatorValue;
    }
  }
}

class User {
  constructor(uName, uPassword) {
    this.userName = uName;
    this.password = uPassword;
  }

  greet() {
    console.log("Hi, I am" + this.userName);
  }
}

class UserInputForm {
  constructor() {
    this.form = document.getElementById("user-input");
    this.userNameInput = document.getElementById("username");
    this.password = document.getElementById("password");

    this.form.addEventListener("submit", this.signupHandler.bind(this));
  }

  // 메서드 생성
  signupHandler(event) {
    event.preventDefault();
    const enteredUserName = this.userNameInput.value;
    const enteredPassword = this.passwordInput.value;

    if (
      !Validator.validate(enteredUserName, Validator.REQUIRED) ||
      !Validator.validate(enteredPassword, Validator.MIN_LENGTH, 5)
    ) {
      alert(
        "Invalid input - username or password is wrong (password should be at least six characters"
      );
      return;
    }

    // user 클래스의 새 인스턴스 생성 -> new 키워드 사용
    const newUser = new User(enteredUserName, enteredPassword);
    console.log(newUser);
    newUser.greet();
  }
}

// 새 인스턴스 생성 -> 클래스 실행할 수 있음
new UserInputForm();
