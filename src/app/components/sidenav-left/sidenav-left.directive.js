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
      templateUrl: 'app/components/sidenav-left/sidenav-left.html'
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
  }

})();
