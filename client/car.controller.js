(function(){
    'use strict';
    angular.module('carTracker').controller('mainController',getCarController);

    getCarController.$inject=['carService','$scope','$http'];
    function getCarController(carService,$scope,$http){

        carService.getCars().then(function(response){
            console.log(response);
        },function(erroe){
            console.log(error);
        });
        
        /*   $scope.tableView = true;
        var x='k';


        console.log("in controller");
        $scope.getCar = function(){
            $scope.tableView = false;
            $http({
                method:'GET',
                url:'http://localhost:3000/api/cars'
            }).then(function(response){
                $scope.newObj=response.data;
                console.log(response);
            },function(error){
                console.log(error);
            });

        }
        $scope.getAlert = function(){
            $scope.tableView = false;
            $http({
                method:'GET',
                url:'http://localhost:3000/alerts'
            }).then(function(response){
                $scope.alertObj = response.data;
                var recentTimeStamp = $scope.alertObj[($scope.alertObj.length-1)].timestamp;
                console.log(recentTimeStamp);
                var pastHalfAnHour = new Date(recentTimeStamp)
                pastHalfAnHour = Date.parse(pastHalfAnHour);
                console.log(pastHalfAnHour);
                pastHalfAnHour = pastHalfAnHour - (30*60000);
                $scope.phHour = new Date(pastHalfAnHour);
                $scope.temptime = new Date();

                $scope.temptime = $scope.phHour.toISOString()
                x = $scope.temptime;
                console.log(x);
                console.log("f");

            },function(error){
                console.log(error);
            });
        }
        console.log($scope.temptime+'hi');
        $scope.getReadings = function(){
            $scope.tableView = false;


            $http({
                method: 'GET',
                url: 'http://localhost:3000/all/readings'
            }).then(function(response){
                var temp;var i=0,j=0;
                var latitud = new Array();
                var longitud = new Array();
                $scope.readingObj = response.data;
                console.log(typeof($scope.readingObj));
                for(var Keyv in $scope.readingObj){
                    /!*console.log(Keyv);*!/
                    for(var inKey in $scope.readingObj[Keyv] ){
                        /!*console.log(inKey);*!/
                        if(inKey == 'timestamp'){
                            temp = $scope.readingObj[Keyv][inKey]
                            if(temp>$scope.temptime){
                                console.log("..,,,,,,.here time is in 30 minutes...........");
                                latitud[i]= $scope.readingObj[Keyv]['latitude'];
                                longitud[j]= $scope.readingObj[Keyv]['longitude'];
                                console.log('latitud is '+latitud[i]+' longitude is '+longitud);
                                i++;
                                j++;
                            }



                        }
                    }
                }
                console.log(x+'last');
                console.log(temp);
                console.log("latitude and longitude objects "+latitud+'/br/br................ '+longitud)
                console.log(this.newText);


            })
        }




    */}

})()