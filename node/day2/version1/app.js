const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
// body-parser 미들웨어 등록 이 미들웨어 또한 내부에 next()가 있음
// 요청 본문 분석을 위한 미들웨어

app.use("/", (req, res, next) => {
  console.log("this always runs!!!!");
  next();
});

app.use("/add-product", (req, res, next) => {
  res.setHeader("Content-Type", "text/html");
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">add product</button></form>'
  );
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.setHeader("Content-Type", "text/html");
  res.send("<h1>hello from express</h1>");
});

app.listen(3000, () => {
  console.log("server is running!!!");
});
