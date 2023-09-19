const express = require("express");
const path = require("path");

// server setup

const app = express();

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

app.use(express.static(path.dirname(__dirname) + "/public/"));

// variables

const __appdir = path.dirname(__dirname) + "/app";

// routes
app.get("/api", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.redirect("/");
});
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
