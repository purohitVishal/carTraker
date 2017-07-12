angular.module('carTracker').directive('removeDivDirective', removeDivDirective);

function removeDivDirective() {
    return {
        scope: true,
        controller: "alertController",
        templateUrl: 'templates/demo.html',
        replace: true,
        link: function (scope, element, attrs, alertController) {
            console.log("fffrom directive");
            scope.delete = function(index){
                console.log(index);
            };


        }
    }
}

