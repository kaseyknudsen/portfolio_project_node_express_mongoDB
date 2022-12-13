const express = require("express")
const homePageRouter = express.Router();

homePageRouter
.route("/")
.all((req,res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
})
.get((req, res) => {
    res.end("Will send you to quicklinks")
})
.post((req, res) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /homepage')
})
.put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /campsites");
  })
  .delete((req, res) => {
    res.statusCode = 403;
    res.end("Delete not supported on /homepage")
  })

  module.exports = homePageRouter;