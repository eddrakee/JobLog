const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// not sure about the type for date
const EventSchema = new Schema({
  name: {type: String, required: true},
  location: {type: String},
  date: {type: Date, required: true},
  time: {type: Date}
}, {timestamps: true});

mongoose.model("Event", EventSchema);
