require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

//Route imports
const { productsRouter } = require("./src/router/productRouter");
const { usersRouter } = require("./src/router/usersRouter");

const app = express();

//Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Routes
app.use("/", productsRouter);
app.use("/", usersRouter);

app.listen(process.env.APP_PORT, () => {
  console.log("Runing on port " + process.env.APP_PORT);
});
