const { Pool } = require("pg");
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "api",
    password: "nikuze",
    port: 12345
})

module.exports = pool;