const path = require("path");

const express = require("express");
const router = express.Router();
const rootDir = require("../utils/path");

router.get("/", (req, res, next) => {
  res.setHeader("Content-Type", "text/html");
  res.sendFile(path.join(rootDir, "views", "shop.html"));

  //dirname은 해당 파일의 상위 폴더 경로 : 현재 기준 routes 폴더를 가리킴
});

module.exports = router;
