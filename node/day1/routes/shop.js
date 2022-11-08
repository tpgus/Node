const path = require("path");
const express = require("express");
const router = express.Router();
const rootDir = require("../util/path");

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
  //순서 dirname은 현재 파일이 위치한 경로 : routes
  //그리고 내가 원하는 파일은 views/shop.html이므로 상위 폴더로 이동한뒤 view 폴더 아래에 shop.html 선택한 뒤
  //path.join 으로 경로를 만든다 (path.join은 윈도우, 리눅스 시스템에서 공통적으로 사용할 수 있음 (역슬래시와 슬래시의 차이))
});

module.exports = router;
