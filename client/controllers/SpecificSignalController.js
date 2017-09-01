(function(){
    angular.module('carTracker').controller('SpecificSignalController',ssController);

    ssController.$inject = ['carService','$http','$scope'];
    function ssController(carService, $http, $scope ){
        $scope.hey='hello fromm controller';
        $scope.signalNames=['vin','latitude','longitude','timestamp','fuelVolume','speed','engineHp','checkEngineLightOn','engineCoolantLow','cruiseControlOn','engineRpm','priority','description'];
        carService.getAlerts().then(function(response){
            $scope.alertObj=response;
            var selectedObjects = new Array();

            $scope.submitbtn=function() {
                console.log(this.vinNameSelected+"....."+this.signalSelected+"....."+this.previousTime);

                var vinNameSelected= this.vinNameSelected;
                var signalSelected = this.signalSelected;
                var previousTime;
                selectedObjects.length=0;




                previousTime = ((this.timeHr*60)+this.timeMin)*60000;
                var signalSinceTime = new Date ();
                previousTime = (Date.parse(signalSinceTime))-previousTime;
                var ptime=new Date(previousTime);
                var prTime = ptime.toISOString();
                console.log(signalSinceTime);
                console.log('time before'+prTime);
                console.log(vinNameSelected);
                console.log('signal selected'+signalSelected);
                console.log(response);
                for(var i=0 ; i<response.length;i++){
                    console.log(response[i].timestamp);
                    console.log(prTime);
                        if((response[i].timestamp > prTime)&&(response[i].vin==vinNameSelected.vin)){
                            console.log("inside iiiiiiifffff");

                            for(var keyz in response[i]){
                                if (keyz==signalSelected){
                                    console.log("compairing keyz "+keyz+" and the key from selection "+signalSelected);
                                    selectedObjects.push(response[i][signalSelected]);
                                }
                            }

                                // console.log(response[i]);
                        }else{
                            console.log("not went in if condition");
                        }
                }


            }
            console.log(selectedObjects);
            $scope.selectedObject = selectedObjects ;
            console.log($scope.selectedObject);
            
        })

    }
})();