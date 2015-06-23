(function() {
  'use strict';

  angular
    .module('resumeApp')
    .controller('ResumeController', ResumeController);

  /** @ngInject */
  function ResumeController(resumeService) {
    var vm = this;

    vm.resumeData = [];

    activate();

    function activate() {
      vm.resumeData = getResume();
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
  }
})();
