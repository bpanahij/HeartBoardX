angular.module('CareX.controllers').controller('QRCtrl', [
  '$scope', '$rootScope', '$location', '$routeParams', 'EventService', function($scope, $rootScope, $location, $routeParams, EventService)
  {
    "use strict";
    $scope.eventId = $routeParams.eventId;
    $scope.event = {};
    $scope.back = function(menu) {
      $location.path('/')
    };

    $scope.generateQRCode = function()
    {
      var qrcodeEl = document.getElementById("qrcode");
      qrcodeEl.innerHTML = "";
      var qrcode = new QRCode(qrcodeEl, {
        text: 'http://www.gomarkit.com/',
        width: 350,
        height: 350,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
      });
      $('#qrcode img').css({width: '100%'});
    };
    $scope.generateQRCode();
  }]);