// html 반영
const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");

function sendHttpRequest(method, url) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    // 요청구성 1단계
    xhr.open(method, url);

    xhr.responseType = "json";

    xhr.onload = function () {
      resolve(xhr.response);
      //   const listOfPosts = JSON.parse(xhr.response);
      //   const listOfPosts = xhr.response;
      //   console.log(listOfPosts);
      //   for (const post of listOfPosts) {
      //     const postEl = document.importNode(postTemplate.content, true);
      //     postEl.querySelector("h2").textContent = post.title.toUpperCase();
      //     postEl.querySelector("p").textContent = post.body;
      //     listElement.append(postEl);
      //   }
    };

    // 요청 전송
    xhr.send();
  });
  return promise;
}

function fetchPosts() {
  sendHttpRequest("GET", "https://jsonplaceholder.typicode.com/posts").then(
    (responseData) => {
      const listOfPosts = responseData;
      for (const post of listOfPosts) {
        const postEl = document.importNode(postTemplate.content, true);
        postEl.querySelector("h2").textContent = post.title.toUpperCase();
        postEl.querySelector("p").textContent = post.body;
        listElement.append(postEl);
      }
    }
  );
}

// async / await
// async function fetchPosts() {
//   const responseData = await sendHttpRequest(
//     "GET",
//     "https://jsonplaceholder.typicode.com/posts"
//   );
//   const listOfPosts = responseData;
//   for (const post of listOfPosts) {
//     const postEl = document.importNode(postTemplate.content, true);
//     postEl.querySelector("h2").textContent = post.title.toUpperCase();
//     postEl.querySelector("p").textContent = post.body;
//     listElement.append(postEl);
//   }
// }

fetchPosts();
