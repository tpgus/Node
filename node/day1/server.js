const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

const PORT = 4000;

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(logger("dev"));

app.use("/admin", adminRoutes);
app.use("/", shopRoutes);

app.use((_, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(PORT, () => {
  console.log(`server is runninsg with PORT ${PORT}!!!`);
});
