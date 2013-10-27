angular.module('CareX.controllers').controller('MedicationCtrl', [
  '$scope', '$location', 'MedicationService', function($scope, $location, MedicationService) {
    "use strict";
    $scope.medication = {

    };
    $scope.medication.pillImageSrc = 'images/pill.jpeg';
    $scope.medication.bottleImageSrc = 'images/bottle.jpg';
    $scope.back = function(menu) {
      $location.path('/')
    };
    $scope.onSuccessPill = function(imageURI) {
      $scope.medication.pillImageSrc = imageURI;
      $scope.$apply();
    }
    $scope.onSuccessBottle = function(imageURI) {
      $scope.medication.bottleImageSrc = imageURI;
      $scope.$apply();
    }
    $scope.onFail = function(message) {
      alert('Failed because: ' + message);
    }
    $scope.snapPill = function() {
      navigator.camera.getPicture($scope.onSuccessPill, $scope.onFail, {
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI
      });
    };

    $scope.snapBottle = function() {
      navigator.camera.getPicture($scope.onSuccessBottle, $scope.onFail, {
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI
      });
    };

    $scope.save = function()
    {
      var med = new MedicationService($scope.medication);
      med.$save(function(err, res) {
        $location.path('/medications');
      });
    };

    $scope.$watch('details', function() {
      if (_.isUndefined($scope.details)) {
        return;
      }
      var location = $scope.details.geometry.location;
      $scope.medication.geocode = {
        lat: location.lat(),
        lng: location.lng()
      };
      $scope.medication.locationName = $scope.details.formatted_address;
    });
  }
]);
