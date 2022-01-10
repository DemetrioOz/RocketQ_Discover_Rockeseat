const express = require("express");
const server = express();

const path = require("path");

const route = require("./route");

server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "views"));
server.use(express.static("public"));

server.use(express.urlencoded({ extended: true }));

server.use(route);

const port = 3000;
server.listen(port, () => {
  console.log("Server Running");
});
