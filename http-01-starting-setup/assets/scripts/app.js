// html 반영
const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");

const xhr = new XMLHttpRequest();

// 요청구성 1단계
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

xhr.responseType = "json";

xhr.onload = function () {
  //   const listOfPosts = JSON.parse(xhr.response);
  const listOfPosts = xhr.response;
  //   console.log(listOfPosts);
  for (const post of listOfPosts) {
    const postEl = document.importNode(postTemplate.content, true);
    postEl.querySelector("h2").textContent = post.title.toUpperCase();
    postEl.querySelector("p").textContent = post.body;
    listElement.append(postEl);
  }
};

// 요청 전송
xhr.send();
