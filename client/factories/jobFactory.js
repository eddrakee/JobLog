app.factory('jobFactory', function($http){
    var factory = {};
    factory.questions = []
    factory.addJob = function(job){
        $http.post('/jobs/add',job).then(function(output){
          console.log(output);
            factory.questions.push(output.data)
        })
    }
    return factory;
})
