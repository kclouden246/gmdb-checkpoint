const supertest = require('supertest')
const app = require('./app')
const request = supertest(app)
var assert = require("assert")

test("GET /movies", async done => {
    supertest(app)
      .get("/movies")
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .end(done)

  })
  test("GET /movies/:id", async done => {
      const res = await request.get("/movies/2");
      let expected = res.body[0].title;
      expect(expected).toEqual("Toy Story 2");
      done();    
  
  })

test("GET /reviews/:id", async done => {
    const res = await request.get("/reviews/2");
    let expected = res.body.length;
    expect(expected).toEqual(2);
    done();    

})

test("POST /reviews", async done => {
    supertest(app)
        .post("/reviews")
        .send({
            id: 7,
            review: "Something"
        })
        .set('Accept', 'application/json')
        .expect(201)
        .end(function(err, res) {
          if(err) 
            return done(err)
          done()
        })
})

test("POST /register", async done => {
    supertest(app)
        .post("/register")
        .send({
            id: 8,
            title: "Fake",
            synposis: "Nothing happens"
        })
        .set('Accept', 'application/json')
        .expect(201)
        .end(function(err, res) {
          if(err) 
            return done(err)
          done()
        })
})

test("GET /movie?search", async done => {
    const res = await request.get("/movies?title=Toy");
    let expected = res.body.length;
    expect(expected).toEqual(4);
    done();    
})