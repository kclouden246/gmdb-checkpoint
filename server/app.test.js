const supertest = require('supertest')
const app = require('./app')
const request = supertest(app)

test("GET /movies", done => {
    supertest(app)
      .get("/movies")
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .end(done)
  })