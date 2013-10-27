angular.module('CareX.services').factory('DischargeService', [
  '$resource', function($resource)
  {
    'use strict';
    var Discharges = $resource('http://www.gomarkit.com/discharges/:_id', {_id: '@id'});
    return Discharges;
  }]);
