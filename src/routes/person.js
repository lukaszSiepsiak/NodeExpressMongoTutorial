var express = require("express");
var router = express.Router();

// Query string example => query property on the request object
// e.x. localhost:5000/person?name=someName&age=20
router.get("/person", (req, res) => {
  const { name, age } = req.query;

  res.send(`Person GET endpoint for name: ${name} and age: ${age}`);
});

// Params example => params after ":" (colon)
router.get("/person/:name", (req, res) => {
  const { name } = req.params;

  res.send(`Person GET endpoint for name: ${name}`);
});

// Params example => params after ":" (colon)
router.get("/error", (req, res) => {
  throw new Error("Throws person error");
});

module.exports = router;
