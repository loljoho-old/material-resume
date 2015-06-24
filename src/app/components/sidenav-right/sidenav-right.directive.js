(function() {
  'use strict';

  angular
    .module('resumeApp')
    .directive('mrSidenavRight', mrSidenavRight);

  /** @ngInject */
  function mrSidenavRight() {
    var directive = {
      restrict: 'E',
      replace: true,
      templateUrl: 'app/components/sidenav-right/sidenav-right.html',
      controller: SidenavRightController,
      controllerAs: 'dm'
/*
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
*/
    };

    return directive;

    /** @ngInject */
    function SidenavRightController($mdSidenav, $mdMedia, $mdUtil, $log) {
      var dm = this;

      dm.navLinks   = [];
      dm.openRight  = openSidenav;
      dm.closeRight = closeSidenav;

      activate();

      function activate() {
        dm.navLinks = getNavLinks();
        $log.info('Sidenav-Right Controller Activated.');
        return dm.navLinks;
      }

      function getNavLinks() {
        return [
          'Overview',
            '> Summary',
            '> Profile',
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
        $mdSidenav('right').open()
          .then(function() {
            $log.info('Open right sidenav.');
          });
      }

      function closeSidenav() {
        $mdSidenav('right').close()
          .then(function() {
            $log.info('Close right sidenav.');
          });
      }
    }
  }

})();