angular.module("app").factory("jobFactory", jobFactory);

function jobFactory($http){
    var factory = {};
    factory.addJob = function(job,cb){
        $http.post('/jobs/add',job).then(function(output){
            cb(output.data);
        })
    }
    factory.getJobs = function(cb){
        $http.get('/jobs/all').then(function(output){
            cb(output.data);
        });
    }
    return factory;
}
