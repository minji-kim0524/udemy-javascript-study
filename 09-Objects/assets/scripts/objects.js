const movieList = document.getElementById("movie-list");

movieList.style["background-color"] = "red";
movieList.style.display = "block";

let person = {
  "first name": "Max",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  greet: function () {
    alert("Hi there!");
  },
};

//새로운 프로퍼티 및 값 할당
person.isAdmin = true;
console.log(person);

// 프로퍼티 삭제
delete person.age;
console.log(person);
console.log(person.age); // undefined

person.greet();

console.log(person["first name"]);
