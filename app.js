const express = require("express");
const app = express();
const date = require(__dirname + "/date.js");

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

const toDoList = [];

const currentDate = date.getDate();

app.get("/", function (req, res) {
  res.render("list", { header: currentDate, list: toDoList });
});

app.post("/", function (req, res) {
  toDoList.push(req.body.newItem);
  res.redirect("/");
});

let port = process.env.PORT;

if (port == null || port == "") {
  port = 3000;
} 

app.listen(port, function () {
  console.log("Server is running.");
});
