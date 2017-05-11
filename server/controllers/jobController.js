var mongoose = require('mongoose');
var Job = mongoose.model('Job');

module.exports = (function(){
  return{
    //your code
    addJob: function(req,res){
      var job = new Job(req.body)
      job.save(function(err,data){
        if(err){
          console.log(err);
        }
        else{
          console.log('added new job'+ req.body);
          res.json(data);
        }
      })
    },
    allJobs: function(req,res){
        Job.find({},function(err,data){
            if(err){
                console.log(err);
            }
            else{
                res.json(data);
            }
        })
    }
  }
})();