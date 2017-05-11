angular.module("app").factory("jobFactory", jobFactory);

function jobFactory($http){
  var factory = {};

  factory.addJob = (jobInfo) => {
	$http.post("/job/add", jobInfo).then(function(returnedData){
	  if(returnedData.data.success){
	    cb(returnedData.data);
	  }
	});
  }
  return factory;
}
