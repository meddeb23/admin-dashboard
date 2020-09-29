const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  client: {
    required: true,
    type: String,
  },
  date: {
    type: Date,
    required: true,
  },
  coast: {
    type: Number,
    require: true,
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
});

const Appointment = mongoose.model("appointment", appointmentSchema);

module.exports = Appointment;
