const express = require("express");
const app = express();
const PORT = 8000;
const { handleConnectDb } = require("./connection.js");
const { Router } = require("./routes/user.js");

app.use(express.urlencoded({ extended: false }));

handleConnectDb("mongodb://127.0.0.1:27017/project-1").then(() =>
  console.log("DB connected")
);

app.use("/api/users", Router);

app.listen(PORT, () => console.log(`Server started at port : ${PORT}`));
