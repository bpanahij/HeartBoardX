angular.module('CareX.controllers').controller('SetupCtrl', [
  '$scope', '$location', 'UserService', function($scope, $location) {
    "use strict";
    $scope.patient = {

    };
    $scope.menu = function(url) {
      $location.path(url)
    };
  }
]);