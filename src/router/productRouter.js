const express = require("express");
const { getAllProducts, getSigleProduct, addProduct, getCategories } = require("../controllers/productsController.js");

const productsRouter = express.Router();

productsRouter.get("/api/products", getAllProducts);
productsRouter.get("/api/product/:productId", getSigleProduct);
productsRouter.post("/api/product/", addProduct);
productsRouter.get("/api/categories", getCategories);

module.exports = {
  productsRouter,
};
