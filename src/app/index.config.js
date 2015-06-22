(function() {
  'use strict';

  angular
    .module('resumeApp')
    .config(config);

  /** @ngInject */
  function config($mdThemingProvider, $logProvider, toastr) {
    // Enable log
    $logProvider.debugEnabled(true);
  
    $mdThemingProvider.theme('default')
      .primaryPalette('grey')
      .accentPalette('red')
      .warnPalette('deep-orange');

    // Set options third-party lib
    toastr.options.timeOut = 3000;
    toastr.options.positionClass = 'toast-top-right';
    toastr.options.preventDuplicates = true;
    toastr.options.progressBar = true;
  }

})();
