const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "127.0.0.1",
    port: "3306",
    user: "root",
    database: "TestGal",
    password: "root"
  });

connection.connect(function(err){
    if (err) {
      return console.error("Ошибка: " + err.message);
    }
    else{
      console.log("Подключение к серверу MySQL успешно установлено");
    }
 });

 module.exports = connection;