const express = require("express");
const path = require("path");
require("dotenv").config();
// server setup

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server is listening on port " + port);
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
