const express = require("express")
const contactMeRouter = express.Router();

contactMeRouter
.route("/")
.all((req,res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
})
.get((req, res) => {
    res.end("Getting contact info")
})
.post((req, res) => {
    res.end(`Will add ${req.body.firstname} ${req.body.lastname} to the database.`)
})
.put((req, res) => {
    res.end("Updating contact info");
  })
  .delete((req, res) => {
    res.end("Deleting your contact info")
  })

  module.exports = contactMeRouter;