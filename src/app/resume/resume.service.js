(function() {
  'use strict';

  angular
    .module('resumeApp')
    .factory('resumeService', resumeService);

  /** @ngInject */
  function resumeService($resource) {
    return $resource('assets/data/resume.json');
  }
})();
