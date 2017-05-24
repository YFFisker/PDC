'use strict';

angular.module('PDCApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];




    $('serviceGrid').bootstrapTable({
        url : "",

    })


  });
