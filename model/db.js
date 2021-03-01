const mysql = require('mysql');
const dbConfig = require('../config/db.config.js');

const connection = mysql.createConnection({
    host: dbConfig.HOST,
    host: dbConfig.DB_USER,
    host: dbConfig.DB_PASSWORD,
    host: dbConfig.DB_NAME,
});

connection.connect(error => {
    if (error) throw error;
    console.log("Connexion reussi");
});

module.exports = connection;
