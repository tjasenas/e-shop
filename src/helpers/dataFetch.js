const mysql = require("mysql2/promise");
const { dbConfig } = require("../../config");

module.exports.dataFetch = async (sql, argArr = []) => {
  let connection;
  try {
    console.log(argArr);
    connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.execute(sql, argArr);
    return [rows, null];
  } catch (error) {
    console.log("error from dataFetch");
    return [null, error];
  } finally {
    if (connection) connection.end();
    if (connection) connection.end();
  }
};
