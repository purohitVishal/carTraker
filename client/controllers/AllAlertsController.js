(function () {
    'use strict';
    angular.module('carTracker').controller('alertController', getAlertController);

    getAlertController.$inject = ['carService', '$scope', '$http', '$location','$route'];
    function getAlertController(carService, $scope, $http, $location,$route) {


        carService.getAlerts().then(function (response) {

                $scope.allAlertObj=response;
                $scope.alertObj=response;

                var alertOfVin;
                var allAlertsOfVin = new Array();
                // $scope.selectboxClick = function(){
                //     for(var i=$scope.alertObj.length;i>0;i--){
                //         $scope.alertObj.pop();
                //     }
                //     $scope.alertObj=[];
                //     console.log("in select clickk");
                // }



            /*$scope.remove = function(arry, index){
                    console.log("select box ng-click");
                    arry.splice(index);
                    $scope.alertObj=arry;

                        // $scope.alertObj.splice(0,$scope.alertObj.length);

                }*/
                /*$scope.finished=function(arry, index){
                    console.log("repeate finished "+index);

                }*/

                //$scope.allAlertObj.push(response);
                $scope.submitBtn = function() {

                    allAlertsOfVin.length=0;
                    alertOfVin = this.alertOfVin;

                console.log(alertOfVin);
                    console.log("vin selected");

                    for(var i=0; i<response.length;i++){
                        if(alertOfVin.vin==response[i].vin){
                            allAlertsOfVin.push(response[i]);
                        }
                    }

                    //this.newObj=allAlertsOfVin;
                    $scope.alertObj=allAlertsOfVin;
                    console.log($scope.alertObj);

                }





/*
                var count, vinInCompairision;
                var temp = new Array();
                var tempTime = new Date();

                var twoHrBefore = new Date();                                   //current time picked by the new date function
                console.log("hello from alerts controller");
                console.log("current time stamp is ... " + tempTime);
                tempTime = Date.parse(tempTime);
                console.log("parsed time ... " + tempTime);

                tempTime = tempTime - (120 * 60000);                            //here we subtract 2 hours from current time in milliseconds

                console.log("time before two hrs ... " + tempTime);
                var beforeTime = new Date(tempTime);
                twoHrBefore = beforeTime.toISOString();                                    //it is time before 2 hours in ISO format
                console.log("formated time before two hrs.. " + twoHrBefore);
                //console.log(response);
                var alertWithInTwoHours = new Array();
                for (var i=0; i<response.length;i++){
                    if(response[i].timestamp > twoHrBefore){
                        console.log("in twohr before");
                        alertWithInTwoHours.push(response[i]);
                    }
                }
                console.log(alertWithInTwoHours);
                var match=0;
                for (var i = 0; i < alertWithInTwoHours.length; i++) {
                    count = 0;match=0;

                    if((alertWithInTwoHours[i].priority=='high')&&(alertWithInTwoHours[i].timestamp>twoHrBefore)){
                        vinInCompairision=alertWithInTwoHours[i].vin;
                        alertWithInTwoHours[i].count=count+1;
                        for(var j=i;j>0;j--){
                            if((alertWithInTwoHours[j].vin==vinInCompairision)&&(alertWithInTwoHours[j].priority=='high')&&(alertWithInTwoHours[i].timestamp>twoHrBefore)){
                                match=match+1;
                            }
                            alertWithInTwoHours[i].count=count+match;
                        }
                    }
                }
                console.log(alertWithInTwoHours);
                $scope.alertObj = alertWithInTwoHours;*/

            }, function (error) {
                console.log(error);
            }
        );
    }

})();