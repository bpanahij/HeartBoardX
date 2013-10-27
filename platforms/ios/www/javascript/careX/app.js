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
      }).when('/admin/events', {
          templateUrl: 'partials/admin/events.html',
          controller: 'EventsCtrl'
        }).when('/admin/event/:eventId', {
          templateUrl: 'partials/admin/event.html',
          controller: 'EventCtrl'
        }).when('/event/:eventId', {
          templateUrl: 'partials/eventQR.html',
          controller: 'EventQRCtrl'
        }).when('/ev/:eventId', {
          templateUrl: 'partials/lead/lead.html',
          controller: 'LeadCtrl'
        }).when('/medication/add', {
          templateUrl: 'partials/admin/medication.html',
          controller: 'MedicationCtrl'
        }).when('/discharge/record', {
          templateUrl: 'partials/admin/record.html',
          controller: 'RecordCtrl'
        }).when('/discharges', {
          templateUrl: 'partials/admin/discharges.html',
          controller: 'DischargesCtrl'
        }).otherwise({
          redirectTo: '/'
        });
    }
  ]).run(['$rootScope', function($rootScope) {
    'use strict';
  }
  ]);
