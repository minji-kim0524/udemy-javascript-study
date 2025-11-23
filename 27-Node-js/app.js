const http = require("http");

// 서버 생성
const server = http.createServer((request, response) => {
  response.write("hello there!");
  response.end();
});

// 서버 시작을 위해서는 listen 단계가 필요함
server.listen(3000);
