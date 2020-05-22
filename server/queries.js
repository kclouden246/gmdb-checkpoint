const Pool = require("pg").Pool;
const pool = new Pool({
  user: "kclouden",
  host: "localhost",
  database: "netflix",
  password: "pw",
  port: 5432,
});

//GET movies
const getMovies = (request, response) => {
  pool.query("SELECT * FROM playlist", (error, results) => {
    if(error)
      throw error
    response.status(200).json(results.rows)
  })
}

//GET movie by id


//Get review by id


//POST review


//Create new movie


module.exports = {getMovies}