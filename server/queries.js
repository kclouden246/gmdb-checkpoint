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
const getMovieById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("SELECT * FROM playlist WHERE id = $1", [id], (error, results) => {
    if(error)
      throw error
    response.status(200).json(results.rows)
  })
}

//Get review by id
const getMovieReviewById = (request, response) => {
  const id = parseInt(request.params.id)
  
  pool.query("SELECT * FROM reviews WHERE id = $1", [id], (error, results) => {
    if(error)
      throw error
    response.status(200).json(results.rows)
  })
  
}


//POST review


//Create new movie


module.exports = {getMovies, getMovieById, getMovieReviewById}