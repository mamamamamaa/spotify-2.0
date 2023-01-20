const express = require("express");
const { login, refresh } = require("../controllers/auth");

const route = express.Router();

route.post("/refresh", refresh);

route.post("/login", login);

module.exports = route;
