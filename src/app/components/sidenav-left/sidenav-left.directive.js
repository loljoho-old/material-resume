(function() {
  'use strict';

  angular
    .module('resumeApp')
    .directive('mrSidenavLeft', mrSidenavLeft);

  /** @ngInject */
  function mrSidenavLeft() {
    var directive = {
      restrict: 'E',
      replace: true,
      templateUrl: 'app/components/sidenav-left/sidenav-left.html',
      controller: SidenavLeftController,
      controllerAs: 'dm'
    };

    return directive;

    /** @ngInject */
    function SidenavLeftController($mdSidenav, $mdMedia, $mdUtil, $log) {
      var dm = this;

      dm.openLeft  = openSidenav;
      dm.closeLeft = closeSidenav;

      activate();

      function activate() {
        dm.navLinks = getNavLinks();
        $log.info('Sidenav-Left Controller Activated.');
        return dm.navLinks;
      }

      function getNavLinks() {
        return [
          'Overview',
            '> Summary',
            '> Profile',
            '> Ongoing',
          'Skills & Expertise',
            '> Solution Stack',
            '> Areas of Expertise',
            '> Technical Skills',
            '> Proficiencies',
          'Experience',
            '> Projects',
            '> Employment',
            '> Education'
        ];
      }

      function openSidenav() {
        $mdSidenav('left').open()
          .then(function() {
            $log.info('Open left sidenav.');
          });
      }

      function closeSidenav() {
        $mdSidenav('left').close()
          .then(function() {
            $log.info('Close left sidenav.');
          });
      }
    }
  }

})();
