const { PASSWORD } = require("../config/server");
const mysql = require("mysql2");

const connectionPool = mysql.createPool({
  host: "152.32.251.165",
  port: 3306,
  database: "xiaoyinlab",
  user: "root",
  password: PASSWORD,
  connectionLimit: 5,
});

connectionPool.getConnection((err, connection) => {
  if (err) {
    console.log("获取连接失败~", err);
    return;
  }

  connection.connect((err) => {
    if (err) {
      console.log("和数据库建立连接失败~", err);
    } else {
      console.log("和数据库连接成功, 可以操作数据库~");
    }
  });
});

const connection = connectionPool.promise();

module.exports = connection;
