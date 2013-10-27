angular.module('CareX.services').factory('MedicationService', [
  '$resource', function($resource)
  {
    'use strict';
    var Medications = $resource('http://www.gomarkit.com/medications/:_id', {_id: '@id'});
    return Medications;
  }]);
