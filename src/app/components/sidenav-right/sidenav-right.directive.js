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

      dm.isLocked   = true;

      dm.openRight  = openSidenav;
      dm.closeRight = closeSidenav;

      activate();

      function activate() {
        dm.isLocked = true;
        $log.info('Sidenav-Right Controller Activated.');
      }

      function openSidenav() {
        $mdSidenav('right').open()
          .then(function() {
            $log.info('Opened right sidenav.');
            dm.isLocked = true;
          });
      }

      function closeSidenav() {
        $mdSidenav('right').close();
          
            $log.info('Closed right sidenav.');
          
        $timeout(function() {
          dm.isLocked = false;
        }, 1000, false);
      }

      function statusSidenav() {
        return $mdMedia('gt-md') && dm.isLocked;
      }
    }
  }

})();