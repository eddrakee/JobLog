const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
var Job= mongoose.model('Job');

function jobController(){
  var self = this;
  self.post = function(req, res){
    console.log(req.body);
    var job = new job(req.body);
    job.save(function(err,data){
      if(err){
        console.log(err);
      }
      else{
        res.json(data);
      }
    })

  }
}

module.exports = new jobController();
