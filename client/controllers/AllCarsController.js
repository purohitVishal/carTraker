(function(){
    'use strict';
    angular.module('carTracker').controller('mainController',getCarController);

    getCarController.$inject=['carService','$scope','$http'];
    function getCarController(carService,$scope,$http){

        carService.getCars().then(function(response){
            $scope.newObj = response;
            console.log(response);
        },function(erroe){
            console.log(error);
        });

        }

})()