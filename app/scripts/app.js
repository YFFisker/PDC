'use strict';
(function(){


    var app = angular.module('PDCApp', []);

    app.config(['$routeProvider', '$locationProvider',function ($routeProvider, $locationProvider) {
        $routeProvider.when('/main', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        }).when('/grid', {
            templateUrl: 'views/grid.html',
            controller: 'MainCtrl'
        }).when('/add', {
            templateUrl: 'views/add.html',
            controller: 'MainCtrl'
        }).otherwise({
            redirectTo: '/main'
        });
    }]);


}.call(this));
