angular.module('CareX.controllers').controller('RecordCtrl', [
  '$scope', '$location', function($scope, $location) {
    "use strict";
    $scope.back = function(menu) {
      $location.path('/')
    };
    // capture callback
    $scope.captureSuccess = function(mediaFiles) {
      alert('success');
      var i, path, len;
      for(i = 0, len = mediaFiles.length; i < len; i += 1) {
        path = mediaFiles[i].fullPath;
        // do something interesting with the file
        $scope.videoSrc = path;
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
    }
  }
]);
