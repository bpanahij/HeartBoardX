angular.module('CareX.controllers').controller('MedicationCtrl', [
  '$scope', '$location', 'UserService', function($scope, $location, UserService) {
    "use strict";
    $scope.medication = {

    };
    $scope.back = function(menu) {
      $location.path('/')
    };
    $scope.onSuccess = function(imageURI) {
      alert(imageURI);
      $scope.imageSrc = imageURI;
      $scope.$apply();
    }
    $scope.onFail = function(message) {
      alert('Failed because: ' + message);
    }
    $scope.snap = function() {
      navigator.camera.getPicture($scope.onSuccess, $scope.onFail, {
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI
      });
    };
  }
]);
