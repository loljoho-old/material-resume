(function() {
  'use strict';

  angular
    .module('resumeApp')
    .directive('mrJumbotron', mrJumbotron);

  /** @ngInject */
  function mrJumbotron() {
    var directive = {
      replace: true,
      restrict: 'EA',
      transclude: true,
      scope: {
        size: '=',
        name: '='
      },
      link: linkFunc,
      templateUrl: 'app/components/jumbotron/jumbotron.html',
      controller: JumbotronController,
      controllerAs: 'dm'
    };

    return directive;


    function linkFunc(scope, element, attrs) {
      element.addClass(attrs.size);
    }


    /** @ngInject */
    function JumbotronController($log) {
      var dm = this;

      activate();

      function activate() {
        $log.info('Jumbotron Controller Activated.');
      }
    }

  }

})();
