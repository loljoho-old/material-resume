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
    vm.activated  = false;

    vm.contentPadding     = contentPadding;
    vm.getRightToggleIcon = getRightToggleIcon;

    activate();

    function activate() {
      vm.resumeData   = getResume();
      vm.toggleLeft   = buildToggler('left');
      vm.toggleRight  = buildToggler('right');
      vm.activated    = true;
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

    function contentPadding() {
      return $mdMedia('gt-md');
    }

    function getRightToggleIcon() {
      return vm.activated && $mdSidenav('right').isOpen() ? 'arrow-fore' : 'arrow-back';
    }

  }
})();
