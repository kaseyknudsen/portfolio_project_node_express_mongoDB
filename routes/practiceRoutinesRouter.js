const express = require("express")
const practiceRoutinesRouter = express.Router();

practiceRoutinesRouter
.route("/")
.all((req,res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
})
.get((req, res) => {
    res.end("Getting practice routines")
})
.post((req, res) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /practiceroutines')
})
.put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /practiceroutines");
  })
  .delete((req, res) => {
    res.statusCode = 403;
    res.end("Delete not supported on /practiceroutines")
  })

  module.exports = practiceRoutinesRouter;