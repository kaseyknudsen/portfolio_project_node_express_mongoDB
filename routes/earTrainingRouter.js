const express = require("express")
const earTrainingRouter = express.Router();

earTrainingRouter
.route("/")
.all((req,res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
})
.get((req, res) => {
    res.end("Getting ear training info")
})
.post((req, res) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /eartraining')
})
.put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /eartraining");
  })
  .delete((req, res) => {
    res.statusCode = 403;
    res.end("Delete not supported on /eartraining")
  })

  module.exports = earTrainingRouter;