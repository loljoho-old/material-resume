(function() {
  'use strict';

  angular
    .module('resumeApp')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/resume/resume.html',
      })
      .state('section', {
        url: '/section',
        templateUrl: 'app/resume/resume.html',
        controller: 'ResumeController',
        controllerAs: 'sm'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
