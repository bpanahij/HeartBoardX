angular.module('CareX.controllers').controller('MedicationsCtrl', [
  '$scope', '$location', 'MedicationService', function($scope, $location, MedicationService) {
    "use strict";
    $scope.discharges = [];
    $scope.back = function() {
      $location.path('/')
    };
    MedicationService.query({}, function(medications) {
      $scope.medications = medications;
    })
  }
]);
