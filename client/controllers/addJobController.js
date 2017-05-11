app.controller("addJobController",function($scope, jobFactory){
    $scope.addJob = function(){
        jobFactory.addJob($scope.addOneJob)
        $scope.addOneJob = {};
    }
})
