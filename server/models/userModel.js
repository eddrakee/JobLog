const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// We should probably add some validation for emails
// need to add some encryption for passwords
const UserSchema = new Schema({
  firstName: {type: String, required: true, minlength: 2},
  lastName: {type: String, required: true, minlength: 2},
  userName: {tpe: String, required: true, unique: true, minlength: 3, maxlength: 20},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true, minlength: 5},
  adminStatus: {type: Number, default: 0},
  jobs: [{type: mongoose.Schema.Types.ObjectId, ref: "Job"}],
  contacts: [{type: mongoose.Schema.Types.ObjectId, ref: "Contact"}],
  companies: [{type: mongoose.Schema.Types.ObjectId, ref: "Company"}],
  events: [{type: mongoose.Schema.Types.ObjectId, ref: "Event"}]
  }, {timestamps: true});

mongoose.model("User", UserSchema);
