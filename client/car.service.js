(function(){
    "use strict";
    angular.module("carTracker").service('carService', carService);

    carService.$inject = ['$q','$http'];

    function carService($q, $http){
     var self = this;

        self.getCars = function(){
            var deferred = $q.defer();

            $http.get('http://localhost:3000/api/cars').then(function(response){
                deferred.resolve(response.data);
            },function(error){
                console.log(error)
            });

            return deferred.promise;
        };

        self.getAlerts = function(){
            var deferred = $q.defer();

            $http.get('http://localhost:3000/alerts').then(function(response){
                deferred.resolve(response.data);
            },function(error){
                console.log(error)
            });

            return deferred.promise;
        };

        self.getReadings = function(){
            var deferred = $q.defer();

            $http.get('http://localhost:3000/all/readings').then(function(response){
                deferred.resolve(response.data);
            },function(error){
                console.log(error)
            });

            return deferred.promise;
        };
    }
})();