const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(express.static(path.join(__dirname, "public"))); // 정적파일 서비스 css 파일을 위해

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
// body-parser 미들웨어 등록 이 미들웨어 또한 내부에 next()가 있음
// 요청 본문 분석을 위한 미들웨어
app.use("/", shopRoutes);
app.use("/admin", adminRoutes);
app.use((req, res, next) => {
  res.setHeader("Content-Type", "text/html");
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000, () => {
  console.log("server is running!!!");
});
