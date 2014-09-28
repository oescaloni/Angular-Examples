'use strict';

/**
 * @ngdoc function
 * @name angularExamplesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularExamplesApp
 */
angular.module('angularExamplesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
