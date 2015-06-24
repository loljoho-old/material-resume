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
        
        $log.info('Sidenav-Right Controller Activated.');
        
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