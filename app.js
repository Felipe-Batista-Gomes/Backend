const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

const PORT = 3000;

// Middleware
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => console.log("MongoDB conectado"))
  .catch((err) => console.log(err));

module.exports = app;
