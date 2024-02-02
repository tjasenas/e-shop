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
