"use strict";

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

//middlewares
app.use(cors());
app.use(express.json());
app.listen(PORT, () => console.log(`Listening on port${PORT}`));

const errorHandler = require("./handlers/500");
const notFoundHandler = require("./handlers/404");
const recipeRoutes = require("./routes/homechef");
const bodyParser = require("body-parser");
app.use(recipeRoutes);
app.use(errorHandler);
app.use("*", notFoundHandler);
