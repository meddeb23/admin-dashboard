const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  birthday: {
    type: Date,
    required: true,
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  updated_at: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  sexe: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  operations: {
    type: String,
    default: "None",
  },
  disease: {
    type: String,
    required: true,
  },
});

const Client = mongoose.model("client", clientSchema);

module.exports = Client;
