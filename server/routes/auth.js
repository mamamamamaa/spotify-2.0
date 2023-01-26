const express = require("express");
const { login, refresh } = require("../controllers/auth");

const route = express.Router();

route.post("/login", login);

route.post("/refresh", refresh);

module.exports = route;
