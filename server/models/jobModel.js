const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// We need a reference to the parent user
const JobSchema = new Schema({
  position: {type: String},
  url: {type: String},
  jobNotes: {type: String},
  foundThrough: {type: String},
  contact: {type: String},
  // had to comment these out. Was receiving error messages Cast to ObjectID failed for value "Peggy" at path "contact"'
  // contact: {type: mongoose.Schema.Types.ObjectId, ref: "Contact"},
  salary: {type: Number},
  // Job status for when entering the job and will use to update the status bar
  jobStatus: {type: String},
  company: {type: String},
  // _company: {type: mongoose.Schema.Types.ObjectId, ref: "Company"},
}, {timestamps: true});

mongoose.model("Job", JobSchema);
