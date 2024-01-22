const { dbConfig } = require("../../config");
const mysql = require("mysql2/promise");
const { dataFetch } = require("../helpers/dataFetch");

module.exports.getAllProducts = async (req, res) => {
  try {
    const sql = "SELECT * FROM users";
    const [row, error] = await dataFetch(sql);
    res.json(row);
  } catch (error) {
    console.log(error);
  }
};
