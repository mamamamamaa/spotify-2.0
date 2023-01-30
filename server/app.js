const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const { PORT } = process.env;

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

const authRoute = require("./routes/auth");
const songsRoute = require("./routes/song");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger(formatsLogger));

app.use("/auth", authRoute);
app.use("/tracks", songsRoute);

app.listen(PORT, () => console.log(`Server is running on the ${PORT} port`));
