'use strict';

/**
 * @ngdoc function
 * @name angularExamplesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularExamplesApp
 */
angular.module('angularExamplesApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
