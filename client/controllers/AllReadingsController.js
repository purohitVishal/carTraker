(function() {
    'use strict';
    angular.module('carTracker').controller('readingController', getReadingController);

    getReadingController.$inject = ['carService', '$scope', '$http'];
    function getReadingController(carService, $scope, $http) {

        carService.getReadings().then(function (response) {
            $scope.readingObj = response;
            console.log();

            


        }, function (erroe) {
            console.log(error);
        });
    }

})();