const http = require("http");

// 서버 생성
const server = http.createServer((request, response) => {
  response.setHeader("Content-Type", "text/html");
  response.write("<h1>Hello there!</h1>");
  response.end();
});

// 서버 시작을 위해서는 listen 단계가 필요함
server.listen(3000);
