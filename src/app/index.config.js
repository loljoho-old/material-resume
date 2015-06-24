(function() {
  'use strict';

  angular
    .module('resumeApp')
    .config(config);

  /** @ngInject */
  function config($mdThemingProvider, $mdIconProvider, $logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  
    //$mdThemingProvider.theme('default')
    //  .primaryPalette('grey')
    //  .accentPalette('red')
    //  .warnPalette('deep-orange');

    $mdIconProvider
      .icon('github',         'assets/svg/font-awesome/github.svg'    )
      .icon('linkedin',       'assets/svg/font-awesome/linkedin.svg'  )
      .icon('angellist',      'assets/svg/font-awesome/angellist.svg' )
      .icon('codepen',        'assets/svg/font-awesome/codepen.svg'   )

      .icon('arrow-fore',     'assets/svg/material/arrow-fore.svg'    )
      .icon('arrow-back',     'assets/svg/material/arrow-back.svg'    )
      .icon('menu-bars',      'assets/svg/material/menu-bars.svg'     )      

      .icon('google',         'assets/svg/drives/googledrive.svg'     )
      .icon('dropbox',        'assets/svg/drives/dropbox.svg'         )
      .icon('onedrive',       'assets/svg/drives/onedrive.svg'        );
  }

})();
