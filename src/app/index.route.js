(function() {
  'use strict';

  angular
    .module('resumeApp')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      /*
       * HOME
       *  > Summary
       *  > Ongoing
       *  > Profile
       *  > Contact
       */
      .state('home', {
        url: '/',
        templateUrl: 'app/resume/resume.html'
      })

      /*
       * SKILLS
       *  > Solution Stack
       *  > Areas of Expertise
       *  > Developmental Focus
       *  > Skills & Proficiencies
       */
      .state('skills', {
        url: '/skills',
        templateUrl: 'app/skills/skils.html',
        controller: 'SkillsController',
        controllerAs: 'sm'
      })

      /*
       * SKILLS
       *
       *
       *
       */
      .state('experience', {
        url: '/experience',
        templateUrl: 'app/resume/resume.html',
        controller: 'ResumeController',
        controllerAs: 'sm'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
