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
const addReview = (request, response) => {
  const {id, review} = request.body

    pool.query(
      "INSERT INTO reviews (id, review) VALUES ($1, $2)",
      [id, review],
      (error, results) => {
        if (error) 
          throw error;
        response.status(201).send("Review Added");
      }
    );
  
}

//Create new movie
const registerMovie = (request, response) => {
  const {id, title, synposis} = request.body

  pool.query(
    "INSERT INTO playlist (id, title, synposis) VALUES ($1, $2, $3)",
    [id, title, synposis],
    (error, results) => {
      if (error) 
        throw error;
      response.status(201).send("Movie Added");
    }
  );
}

module.exports = {getMovies, getMovieById, getMovieReviewById, addReview, registerMovie}