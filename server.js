const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const router = express.Router();

const db = require('./doctorDB')
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  console.log('responseresponse')
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

// app.get('/users', function(req, res){
//   db.getUsers
// });

app.get("/dataList", async (req, res) => {
  console.log('res===', res);
    try {
      res.status(200).json({
        data: db.getUsers
      });
    } catch (err) {
      res.status(400).json({
        message: "Some error occured",
        err
      });
    }
  });

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})