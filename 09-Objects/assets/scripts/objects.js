// const movieList = document.getElementById("movie-list");

// movieList.style["background-color"] = "red";
// movieList.style.display = "block";

// const userChosenKeyName = "level";

// let person = {
//   "first name": "Max",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   [userChosenKeyName]: "...",
//   greet: function () {
//     alert("Hi there!");
//   },
//   1.5: "hello",
// };

// //새로운 프로퍼티 및 값 할당
// person.isAdmin = true;
// console.log(person);

// // 자바스크립트 객체의 프로퍼티 정렬 순서
// // - 숫자: 오름차순
// // - 문자열: 프로퍼티 추가한 순서

// // 프로퍼티 삭제
// delete person.age;
// console.log(person);
// console.log(person.age); // undefined

// // person.greet();

// const keyName = "first name";
// console.log(person[keyName]); // ????

// // 대괄호 표기법 -> 프로퍼티에 동적 액세스 가능
// console.log(person["first name"]);
// console.log(person[1.5]);

// ----------------------------------------------------

const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = [];

const renderMovies = (filter = "") => {
  const movieList = document.getElementById("movie-list");

  if (movies.length === 0) {
    movieList.classList.remove("visible");
  } else {
    movieList.classList.add("visible");
  }

  movieList.innerHTML = "";

  // 추가될 영화조정
  const filteredMovies = !filter
    ? movies
    : movies.filter((movie) => movie.info.tilte.includes(filter));

  filteredMovies.forEach((movie) => {
    const movieEl = document.createElement("li");
    let text = movie.info.title + "-";
    for (const key in movie.info) {
      if (key !== "title") {
        text = text + `${key}: ${movie.info[key]}`;
      }
    }
    movieEl.textContent = text;
    // 체인: 다중 프로퍼티 요청
    // movieEl.textContent = movie.info.title;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  if (
    title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  )
    return;

  const newMovie = {
    info: {
      title,
      [extraName]: extraValue,
    },
    id: Math.random().toString(),
  };

  movies.push(newMovie);
  // console.log(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
  // 사용자 입력 불러오기
  const filterTerm = document.getElementById("filter-title").value;
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchMovieHandler);
