(function() {
  'use strict';

  angular
    .module('resumeApp')
    .controller('View', View);

  /** @ngInject */
  function View(resumeService, $timeout, $mdMedia, $mdSidenav, $mdUtil, $log) {
    var vm = this;

    vm.resumeData = [];
    vm.pageTitle  = '';

    vm.viewportSmall  = viewportSmall; 

    activate();

    function activate() {
      vm.resumeData   = getResume();
      vm.toggleLeft   = buildToggler('left');
      vm.toggleRight  = buildToggler('right');
    }

    function getResume() {
      vm.resumeData = resumeService.get().$promise
        .then(function(response) {
          vm.resumeData = response;
        }, function(errorMsg) {
          vm.resumeData = errorMsg;
        });
      return vm.resumeData;
    }

    function buildToggler(navID) {
      var debounceFn = $mdUtil.debounce(function() {
        $mdSidenav(navID)
          .toggle()
          .then(function() {
            $log.debug('Toggle ' + navID + ' built.');
          });
      }, 300);
      return debounceFn;
    }

    function viewportSmall() {
      return $mdMedia('sm');
    }

  }
})();
