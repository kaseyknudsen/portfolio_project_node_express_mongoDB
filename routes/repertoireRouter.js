const express = require("express");
const repertoireRouter = express.Router();

repertoireRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Getting repertoire lists");
  })
  .post((req, res) => {
    res.statusCode = 403;
    res.end("POST operation not supported on /repertoire");
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /repertoire");
  })
  .delete((req, res) => {
    res.statusCode = 403;
    res.end("Delete not supported on /repertoire");
  });

module.exports = repertoireRouter;
