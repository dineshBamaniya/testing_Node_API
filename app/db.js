const Pool = require('pg').Pool
const pools = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'api',
  password: 'pgAdmin',
  port: 5432,
})

module.exports = pools;
