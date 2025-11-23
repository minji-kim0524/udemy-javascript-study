const http = require("http");

// 서버 생성
const server = http.createServer((request, response) => {
  // body 는 데이터 청크(chunk)를 저장함 -> 배열로 기본값 설정
  let body = [];
  console.log(request.method, request.url);

  // node.js 에서는 addEventListsner 대신 'on' 또는 'once' 를 사용한다.
  request.on("data", (chunk) => {
    body.push(chunk);
  });
  request.on("end", () => {
    body = Buffer.concat(body).toString();
    // console.log(body);
    let userName = "Unknown User";
    if (body) {
      userName = body.split("=")[1];
    }

    response.setHeader("Content-Type", "text/html");
    response.write(
      `<h1>Hi ${userName}</h1><form method="POST" action="/"><input name="username" type="text"><button type="submit">Send</button></form>`
    );
    response.end();
  });
});

// 서버 시작을 위해서는 listen 단계가 필요함
server.listen(3000);
