const express = require("express");
const path = require("path");
require("dotenv").config();
// server setup

const app = express();

app.listen(process.env.PORT, () => {
  console.log("Server is listening on port " + process.env.PORT);
  console.log("Path is ", __dirname);
});

app.use(express.static(__dirname + "/public/"));

// variables

const __appdir = __dirname + "/app";

// routes

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __appdir });
});

app.get("/home", (req, res) => {
  res.sendFile("/home/index.html", { root: __appdir });
});
//
app.get("/nav/home", (req, res) => {
  res.sendFile("/nav/home/index.html", { root: __appdir });
});

app.get("/nav/about", (req, res) => {
  res.sendFile("/nav/about/index.html", { root: __appdir });
});

module.exports = app;
