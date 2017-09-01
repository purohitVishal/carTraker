(function () {
    'use strict';
    angular.module('carTracker').controller('highAlertController', getAlertController);

    getAlertController.$inject = ['carService', '$scope', '$http', '$location'];
    function getAlertController(carService, $scope, $http, $location) {


        carService.getAlerts().then(function (response) {


                $scope.submitBtn = function (path) {

                    $location.url(path);
                }

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
            $scope.alertObj = alertWithInTwoHours;

            }, function (error) {
                console.log(error);
            }
        );
    }

})();