const mysql = require("mysql2/promise");
const { dbConfig } = require("../../config");

module.exports.dataFetch = async (sql, argArr = []) => {
  let connection;
  try {
    connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.execute(sql, argArr);
    return [rows, null];
  } catch (error) {
    return [null, error];
  } finally {
    if (connection) connection.end();
  }
};
