const { dbConfig } = require("../../config");
const mysql = require("mysql2/promise");
const { dataFetch } = require("../helpers/dataFetch");

module.exports.getAllProducts = async (req, res) => {
  try {
    const sql = "SELECT * FROM items";
    const [row, error] = await dataFetch(sql);
    res.json(row);
  } catch (error) {
    console.log(error);
  }
};
module.exports.getSigleProduct = async (req, res) => {
  try {
    const sql = `SELECT * FROM items WHERE id=?`;
    const [row, error] = await dataFetch(sql, [req.params.productId]);

    if (error) {
      throw new Error(error);
    }
    res.json(row);
  } catch (error) {
    console.log(error);
  }
};
module.exports.addProduct = async (req, res) => {
  try {
    const { title, description, price, stock, category, imgUrl } = req.body;
    const sql = `INSERT INTO items (title, description, price, rating, stock, cat_id, img_url) VALUES (?,?,?,?,?,?,?)`;
    const [row, error] = await dataFetch(sql, [title, description, price, 0, stock, category, imgUrl]);
    if (error) throw new Error(error);
    res.json({ msg: "Produktas sėkmingai pridėtas" });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
module.exports.getCategories = async (req, res) => {
  try {
    const sql = "SELECT * FROM categories";
    const [row, error] = await dataFetch(sql);
    res.json(row);
  } catch (error) {
    console.log(error);
  }
};
