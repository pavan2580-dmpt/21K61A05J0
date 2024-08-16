const express = require("express");

const Routes = express.Router();

Routes.route("/").get((req, res) => {
  res.send("get route...");
});

module.exports = Routes;
