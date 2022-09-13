let mysql = require("mysql");
let pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Faishal@10',
    database: 'nba',
    connectionLimit: 100,
    insecureAuth: true,
    multipleStatements: true
})

module.exports = pool