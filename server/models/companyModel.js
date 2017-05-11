const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// what type should linkedIn connection be? Is string appropriate? - Avsean
// we need to reference the user (_user)
const CompanySchema = new Schema({
companyName: {type: String, required: true},
location: {type: String},
phone: {type: String},
about: {type: String},
linkedInConnection: {type: String},
_user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
jobsApplied: [{type: mongoose.Schema.Types.ObjectId, ref: "Job"}],
contacts: [{type: mongoose.Schema.Types.ObjectId, ref: "Contact"}]
}, {timestamps: true});

mongoose.model("Company", CompanySchema);
