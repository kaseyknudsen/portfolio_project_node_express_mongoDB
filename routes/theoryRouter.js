const express = require("express")
const theoryRouter = express.Router();

theoryRouter
.route("/")
.all((req,res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
})
.get((req, res) => {
    res.end("Getting theory questions...")
})
.post((req, res) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /theory yet')
})
.put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /theory yet");
  })
  .delete((req, res) => {
    res.statusCode = 403;
    res.end("Delete not supported on /theory")
  })

  module.exports = theoryRouter;