angular.module('CareX.controllers').controller('DischargesCtrl', [
  '$scope', '$location', 'DischargeService', function($scope, $location, DischargeService) {
    "use strict";
    $scope.discharges = [];
    $scope.back = function(menu) {
      $location.path('/discharge/record')
    };
    $scope.save = function() {
    }
    DischargeService.query({}, function(discharges) {
      $scope.discharges = discharges;
    })
  }
]);
