var customerModel = require("../models/customer_model");
var express = require("express");
var router = express.Router();

//GET
router.get("/customer/:id", (req, resp) => {
  const { id } = req.params;

  if (id == null) {
    resp.status(400).send("Id must be specified");
  }

  customerModel
    .findById(id)
    .then((doc) => {
      resp.json(doc);
    })
    .catch((err) => {
      resp.status(404).json(err);
    });

  //   if (customer == null) {
  //     resp.status(404).send(`Customer with ID: ${id} does not exists!`);
  //   }

  //   resp.status(200).send(customer);
});

//POST
router.post("/customer", (req, resp) => {
  console.log(req.body);
  if (!req.body) {
    return resp.status(400).send("Request body is missing!");
  }

  let model = new customerModel(req.body);

  if (model != null) {
    model
      .save()
      .then((doc) => {
        if (!doc || doc.length === 0) {
          return resp.status(500).send(doc);
        }

        resp.status(201).send(doc);
      })
      .catch((err) => {
        resp.status(500).json(err);
      });
  }
});

//PUT
router.put("/customer/:id", (req, resp) => {
  const { id } = req.params;

  if (id == null) {
    resp.status(400).send("Id must be specified");
  }

  customerModel
    .findByIdAndUpdate(id, req.body)
    .then((doc) => {
      resp.json(doc);
    })
    .catch((err) => {
      resp.status(404).json(err);
    });
});

//DELETE
router.delete("/customer/:id", (req, resp) => {
  const { id } = req.params;

  if (id == null) {
    resp.status(400).send("Id must be specified");
  }

  customerModel
    .findByIdAndDelete(id)
    .then((doc) => {
      resp.json(doc);
    })
    .catch((err) => {
      resp.status(404).json(err);
    });
});

module.exports = router;
