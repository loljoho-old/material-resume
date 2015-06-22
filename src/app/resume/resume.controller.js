(function() {
  'use strict';

  angular
    .module('resumeApp')
    .controller('ResumeController', ResumeController);

  /** @ngInject */
  function ResumeController($timeout, resumeService, toastr, $log) {
    var vm = this;

    vm.resumeData = [];
    //vm.classAnimation = '';
    //vm.creationDate = 1434909702629;
    //vm.showToastr = showToastr;

    activate();

    function activate() {
      vm.resumeData = getResume();
      $log.info(vm.resumeData);
    //  $timeout(function() {
    //    vm.classAnimation = 'rubberBand';
    //  }, 4000);
    }

    //function showToastr() {
    //  toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    //  vm.classAnimation = '';
    //}

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
