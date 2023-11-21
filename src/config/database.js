const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'node_relacional',
    password: 'a9x35fx0',
    port: 5432
})

module.exports = pool