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
    function SidenavLeftController($mdSidenav, $mdMedia, $mdUtil, $log) {
      var dm = this;

      dm.openLeft  = openSidenav;
      dm.closeLeft = closeSidenav;

      activate();

      function activate() {
        $log.info('Sidenav-Left Controller Activated.');
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
