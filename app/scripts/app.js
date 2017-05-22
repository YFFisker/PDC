'use strict';
(function(){


    var app = angular.module('PDCApp', []);
    app.config(function ($routeProvider) {
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
    });


}.call(this));
