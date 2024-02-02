const express = require("express");
const { getAllProducts, getSigleProduct } = require("../controllers/productsController.js");

const productsRouter = express.Router();

productsRouter.get("/api/products", getAllProducts);
productsRouter.get("/api/product/:productId", getSigleProduct);

module.exports = {
  productsRouter,
};
