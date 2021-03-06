const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Do we want company to just be a string rather than refer to actual companies in our db?
// Probably want some validation for email\
// We need a reference to the user
const ContactSchema = new Schema({
  firstName: {type: String, required: true, minlength: 2},
  lastName: {type: String, minlength: 2},
  recruiter: {type: Boolean},
  favorite: {type: Boolean},
  company: {type: mongoose.Schema.Types.ObjectId, ref: "Company"},
  jobs: [{type: mongoose.Schema.Types.ObjectId, ref: "Job"}],
  email: {type: String, required: true, unique: true},
  phone: {type: Number},
  notes: {type: String}
  }, {timestamps: true});

mongoose.model("Contact", ContactSchema);
