var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");

var personRoute = require("./routes/person");
var customerRoute = require("./routes/customer");

// Set middlewares
app.use(bodyParser.json());
app.use(personRoute);
app.use(customerRoute);
app.use(express.static("public"));

//Handler for 404 - Resource not found
app.use((req, res, next) => {
  res.status(404).send("You are lost!");
});
//Handler for 500 - Internal server error
app.use((err, req, res, next) => {
  res.sendFile(path.join(__dirname, "../public/500.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server has started on port: ${PORT}`);
});
