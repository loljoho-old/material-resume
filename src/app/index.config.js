(function() {
  'use strict';

  angular
    .module('resumeApp')
    .config(config);

  /** @ngInject */
  function config($mdThemingProvider, $mdIconProvider, $logProvider, toastr) {
    // Enable log
    $logProvider.debugEnabled(true);
  
    $mdThemingProvider.theme('default')
      .primaryPalette('grey')
      .accentPalette('red')
      .warnPalette('deep-orange');

    $mdIconProvider
      .icon('github',         'assets/icons/github.svg'    )
      .icon('linkedin',       'assets/icons/linkedin.svg'  )
      .icon('angellist',      'assets/icons/angellist.svg' )
      .icon('codepen',        'assets/icons/codepen.svg'   )

      .icon('google',         'assets/icons/googledrive.svg'  )
      .icon('dropbox',        'assets/icons/dropbox.svg'      )
      .icon('onedrive',       'assets/icons/onedrive.svg'     );

    // Set options third-party lib
    toastr.options.timeOut = 3000;
    toastr.options.positionClass = 'toast-top-right';
    toastr.options.preventDuplicates = true;
    toastr.options.progressBar = true;
  }

})();
