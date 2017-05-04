const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// what type should linkedIn connection be? Is string appropriate? - Avsean
const CompanySchema = new Schema({
companyName: {type: String, required: true},
location: {type: String},
phone: {type: String},
about: {type: String},
linkedInConnection: {type: String},
jobsApplied: [{type: mongoose.Schema.Types.ObjectId, ref: "Job"}],
contacts: [{type: mongoose.Schema.Types.ObjectId, ref: "Contact"}]
}, {timestamps: true});

mongoose.model("Company", CompanySchema);
