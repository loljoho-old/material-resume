(function() {
  'use strict';

  angular
    .module('resumeApp')
    .factory('resumeService', resumeService);

  /** @ngInject */
  function resumeService($resource) {
    var service = $resource('assets/data/:query.json',
      { query: 'resume' },
      {
        getSections: {
          method: 'GET', 
          params: { query: 'sections' }
        }
      });

    return service;
  }
})();
