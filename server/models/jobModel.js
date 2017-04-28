const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JobSchema = new Schema({
  position: {type: String},
  url: {type: String},
  jobNotes: {type: String},
  dateApplied: {type: Date},
  foundThrough: {type: String},
  contact: {type: mongoose.Schema.Types.ObjectId, ref: "Contact"},
  salary: {type: Number},
  jobProgress: {type: Number},
  _company: {type: mongoose.Schema.Types.ObjectId, ref: "Company"},
}, {timestamps: true});

mongoose.model("Job", JobSchema);