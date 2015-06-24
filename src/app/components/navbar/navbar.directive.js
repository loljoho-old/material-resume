(function() {
  'use strict';

  angular
    .module('resumeApp')
    .directive('mrNavbar', mrNavbar);

  /** @ngInject */
  function mrNavbar() {
    var directive = {
      restrict: 'E',
      replace: true,
      templateUrl: 'app/components/navbar/navbar.html'
      /*
      scope: {
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
      */
    };

    return directive;
  }

})();
