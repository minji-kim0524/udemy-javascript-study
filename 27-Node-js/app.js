// Express.js 를 사용하여 웹 서버 설정하기
const express = require("express");
const bodyParser = require("body-parser");

const locationRoutes = require("./routes/location");

const app = express();

// app.set("view engine", "ejs");
// app.set("views", "views");

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(locationRoutes);

// app.use((req, res, next) => {
//   res.setHeader("Content-Type", "text/html");
//   next();
// });

// app.use((req, res, next) => {
//   const userName = req.body.username || "Unknown User";
//   if (body) {
//     userName = body.split("=")[1];
//   }
//   res.send(
//     `<h1>Hi ${userName}</h1><form method="POST" action="/"><input name="username" type="text"><button type="submit">Send</button></form>`
//   );
// res.send 를 ejs 를 이용한 구문으로 변경시 아래와 같이 작성할 수 있음
// res.render("index", {
//   user: userName,
// });
// });

app.listen(3000);
