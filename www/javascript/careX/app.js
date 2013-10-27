var Passport = angular.module('CareX', [
    'ngResource', 'ngGoogleAutoComplete', 'CareX.filters', 'CareX.services', 'CareX.directives', 'CareX.controllers', 'webStorageModule'
  ]).config(function($compileProvider) {
    $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
  }).config([
    '$routeProvider', '$rootScopeProvider', function($routeProvider) {
      'use strict';
      $routeProvider.when('/', {
        templateUrl: 'partials/admin/setup.html',
        controller: 'SetupCtrl'
      }).when('/medication/add', {
          templateUrl: 'partials/admin/medication.html',
          controller: 'MedicationCtrl'
        }).when('/discharge/record', {
          templateUrl: 'partials/admin/record.html',
          controller: 'RecordCtrl'
        }).when('/discharges', {
          templateUrl: 'partials/admin/discharges.html',
          controller: 'DischargesCtrl'
        }).when('/qrcode', {
          templateUrl: 'partials/admin/qrcode.html',
          controller: 'QRCtrl'
        }).otherwise({
          redirectTo: '/'
        });
    }
  ]).run(['$rootScope', function($rootScope) {
    'use strict';
  }
  ]);
