angular.module('CareX.controllers').controller('RecordCtrl', [
  '$scope', '$location', 'DischargeService', function($scope, $location, DischargeService) {
    "use strict";
    $scope.discharge = {

    };
    $scope.back = function(menu) {
      $location.path('/')
    };
    $scope.options = {
      type: 'geocode'
    };
    // capture callback
    $scope.captureSuccess = function(mediaFiles) {
      alert('success');
      var i, path, len;
      for(i = 0, len = mediaFiles.length; i < len; i += 1) {
        path = mediaFiles[i].fullPath;
        // do something interesting with the file
        $scope.discharge.videoSrc = path;
        $scope.$apply();
      }
    };
    // capture error callback
    $scope.captureError = function(error) {
      alert('Error code: ' + error.code, null, 'Capture Error');
    };
    $scope.video = function() {
      // start video capture
      navigator.device.capture.captureVideo($scope.captureSuccess, $scope.captureError);
    };
    $scope.discharge.videoSrc = 'asdasdasd';
    $scope.$watch('details', function() {
      if (_.isUndefined($scope.details)) {
        return;
      }
      var location = $scope.details.geometry.location;
      $scope.discharge.geocode = {
        lat: location.lat(),
        lng: location.lng()
      };
      $scope.discharge.locationName = $scope.details.formatted_address;
    });
    $scope.save = function()
    {
      var discharge = new DischargeService($scope.discharge);
      discharge.$save(function(err, res) {
        console.log(err, res);
      });
    }
  }
]);
