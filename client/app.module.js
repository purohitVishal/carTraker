(function () {
    'use strict';
    angular.module('carTracker', ['ngRoute']);

    angular.module('carTracker').config(moduleConfig);

    moduleConfig.$inject = ['$routeProvider'];
    function moduleConfig($routeProvider) {
        $routeProvider
            .when('/All-Cars', {
                templateUrl: 'templates/AllCarsTmpl.html',
                controller: 'mainController',
                controllerAS: 'mainCVM'
            })
            .when('/All-Alerts', {
                templateUrl: 'templates/AllAlertsTmpl.html',
                controller: 'alertController',
                controllerAs: 'alertVM'

            })
            .when('/All-Readings', {
                templateUrl: 'templates/AllReadingsTmpl.html',
                controller: 'readingController',
                controllerAs: 'readingVM'
            })
            .when('/specific-signal-detail', {
                templateUrl: 'templates/SpecificSignalDetailTmpl.html',
                controller: 'SpecificSignalController',
                controllerAs: 'sscVM'
            })
            .when('/gps-Locate-Tmpl', {
                templateUrl: 'templates/gpsLocateTmpl.html',
                controller: 'readingController',
                controllerAs: 'readingVM'
            }).when('/homeTmpl',{
            templateUrl:'templates/homeTmpl.html'
            })
            .when('/All-High-Alerts',{
                templateUrl:'templates/AllHighAlerts.html',
                controller:'highAlertController',
                controllerAs:'alertVM'
            })
            .otherwise({redirectTo: '/homeTmpl'})

    }
})();