'use strict';

/* Controllers */

var carApp = angular.module('carApp', []);

carApp.controller('CarListCtrl', function($scope) {
  $scope.orderField1 = '';
  $scope.orderField2 = '';
  $scope.orderFieldAction = 'false';

  $scope.cars = [
    {'marca': 'toyota',
     'modelo': 'carlos',
     'matricula': '44444'
    },
    {'marca': 'nissan',
     'modelo': 'feo',
     'matricula': '33333'
    },
    {'marca': 'opel',
     'modelo': 'corsa',
     'matricula': '22222'
    },
    {'marca': 'toyota',
     'modelo': 'auris',
     'matricula': '11111'
    },
    {'marca': 'seat',
     'modelo': 'panda',
     'matricula': 'XV-f9'
    },
    {'marca': 'wolswagen',
     'modelo': 'pepe',
     'matricula': 'XV-g12'
    },
    {'marca': 'seat',
     'modelo': 'pepe',
     'matricula': 'XV-f11'
    },
    {'marca': 'toyota',
     'modelo': 'auris',
     'matricula': 'XV-f12'
    }
  ];
});
