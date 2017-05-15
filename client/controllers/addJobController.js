
app.controller("addJobController",function($scope, jobFactory){
    $scope.addJob = function(){
        jobFactory.addJob($scope.addOneJob, () => {})
        $scope.addOneJob = {};
    }
})

// angular.module("app").controller("jobController", jobController);

// function jobController($location, jobFactory){
//   var self = this;
//   self.addJob = () => {
//     jobFactory.addJob(self.newJob, function(returnedData){
//       console.log('success');
//     });
//   }
//   self.getJobs = () => {
//     jobFactory.getJobs(function(data){
//         self.jobList=data;
//     })
//   }
//   self.getJobs();
// }


// app.controller("jobController",function($scope, jobFactory){
//     $scope.addJob = function(){
//         jobFactory.addJob($scope.addOneJob)
//         $scope.addOneJob = {};
//     }
//     function getJobs(){
// 		jobFactory.getJobs(function(data){
// 			$scope.jobList=data;
// 		})
// 	}
// 	getJobs();
// })
