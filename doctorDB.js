const Pool = require('pg').Pool
const pools = new Pool({
  user: '',
  host: 'localhost',
  database: 'hostipate_db',
  password: 'pgAdmin',
  port: 5432,
})

let getUsers = (request, response) => {
  console.log('res=======', response, request);
  pools.query(`SELECT "names" FROM doctor_records2 b WHERE NOT EXISTS (SELECT * FROM doctor_records a WHERE a.name = b.names)`, (error, results) => {
    console.log("error===",error,"results===" ,results)
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = getUsers;