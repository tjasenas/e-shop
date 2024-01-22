const express = require("express");
const { getAllProducts } = require("../controllers/productsController.js");

const productsRouter = express.Router();

productsRouter.get("/api/products", getAllProducts);

module.exports = {
  productsRouter,
};
