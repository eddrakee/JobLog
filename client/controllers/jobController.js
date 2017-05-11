angular.module("app").controller("jobController", jobController);

function jobController($location,jobFactory){
  var self = this;

  self.addJob = () => {
    jobFactory.addJob(self.jobInfo, function(returnedData){
      console.log(returnedData);
    });
  }
}
