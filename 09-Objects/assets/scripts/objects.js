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
    // 프로퍼티 존재 여부 확인방법
    // 1. if ('info' in movie) {}
    // 2. if (movie.info === undefined) {}
    const { info, ...otherProps } = movie;
    console.log(otherProps);
    // const { title: movieTitle } = info;
    let { getFormattedTitle } = movie;
    console.log(this); // window
    // bind() 메서드
    // - 나중에 실행할 함수를 준비 -> 마지막에는 새로운 함수 객체를 반환
    // - 첫번째 인자: 본 함수 내에서 this 가 참조로 할 대상을 기리킴
    getFormattedTitle = getFormattedTitle.bind(movie);

    // call() 메서드
    // - bind 와 다르게 함수를 바로 실행함
    // - 첫번째 인자인 this가 가리키는 내용을 변경할 때 함수를 실행
    // let text = movie.getFormattedTitle.call(movie) + "-";

    // apply() 메서드
    // - call 메서드와 비슷하나, 다음 인자를 무한하게 추가할 수 없으며, 두번째 인자에는 배열이 옴
    // 이 배열은 함수가 가지게 될 다양한 인자에 대한 값임
    let text = movie.getFormattedTitle.apply(movie) + "-";
    // let text = movie.getFormattedTitle() + "-";
    for (const key in info) {
      if (key !== "title") {
        text = text + `${key}: ${info[key]}`;
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
    // this 키워드
    // - 함수 내에서 해당 함수가 객체의 일부인지와 상관없이
    // this 키워드는 해당 함수를 호출한 모든 항목을 참조함
    // getFormattedTitle: function () {
    //   return this.info.title.toUpperCase();
    // },

    // 위 메서드를 아래와 같은 방식으로 작성할 수 도 있음
    getFormattedTitle() {
      return this.info.title.toUpperCase();
    },
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
