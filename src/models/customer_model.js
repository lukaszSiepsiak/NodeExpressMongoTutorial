var mongoose = require("mongoose");

const server = "localhost";
const port = "27017";
const database = "nodeExpressMongoDB";

mongoose.connect(`mongodb://${server}:${port}/${database}`);

let customerSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("Customer", customerSchema);
