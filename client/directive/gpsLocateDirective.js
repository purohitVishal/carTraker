
    angular.module('carTracker').directive('gpsLocator',gpsLocator);

    function gpsLocator(){
        return{
            scope:true,
            controller:"readingController",
            template:'<div><select ng-model="vinSelected" ng-options="item.vin for item in readingObj"></select><button ng-click=click() class="btn btn-primary" id="btn" >submit</button></div>',
            replace:true,
            link:function($scope, element,attrs,readingController,scope) {

                $scope.click= function () {
                    console.log("btn clicked");
                    console.log($scope.vinSelected);
                    vinSelected = $scope.vinSelected
                    console.log($scope.readingObj);
                    readingObj = $scope.readingObj;
                    var latitute = new Array();
                    var longitute = new Array();
                    var currentTime = new Date();                    // it is the current time picked by new date function
                    console.log(currentTime);
                    currentTime = Date.parse(currentTime);
                    console.log(currentTime);
                    var pastTime = currentTime-30*60000;            //here we substract 30 minutes in milliseconds
                    console.log(pastTime);
                    var beforeTime = new Date(pastTime);
                    console.log(beforeTime);
                    beforeTime = beforeTime.toISOString();          //ISO format 30 minutes before time from now
                    console.log(beforeTime);
                    for(var i=0;i<readingObj.length;i++){                 // loop which collects longitude and latitude of the cars coordinates
                        if((readingObj[i].vin == vinSelected.vin)&(readingObj[i].timestamp>beforeTime)){
                            latitute.push(readingObj[i].latitude);
                            longitute.push(readingObj[i].longitude);
                        }
                    }
                        console.log(latitute);


                    window.map = new google.maps.Map(document.getElementById('map-canvas'), {
                        mapTypeId: google.maps.MapTypeId.ROADMAP,
                        scrollwheel: false
                    });

                    var infowindow = new google.maps.InfoWindow();
                    var flightPlanCoordinates = [];
                    var bounds = new google.maps.LatLngBounds();

                    for (i = 0; i < latitute.length; i++) {
                        marker = new google.maps.Marker({
                            position: new google.maps.LatLng(latitute[i], longitute[i]),
                            map: map
                        });
                        flightPlanCoordinates.push(marker.getPosition());
                        bounds.extend(marker.position);

                        
                    }

                    map.fitBounds(bounds);

                    var flightPath = new google.maps.Polyline({
                        map: map,
                        path: flightPlanCoordinates,
                        strokeColor: "#FF0000",
                        strokeOpacity: 1.0,
                        strokeWeight: 2
                    });

                }
            }
            }
        }

