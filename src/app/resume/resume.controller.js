(function() {
  'use strict';

  angular
    .module('resumeApp')
    .controller('ResumeController', ResumeController);

  /** @ngInject */
  function ResumeController() {
    var vm = this;

    vm.thisValue = 1;

  }
})();
