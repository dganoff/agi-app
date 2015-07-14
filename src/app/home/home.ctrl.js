(function() {
  "use strict";

  angular
    .module("app")
    .controller("HomeCtrl", HomeCtrl);

  /* @ngInject */
  function HomeCtrl() {
    /*jshint validthis: true */
    var vm = this;

    // Assign all bindable models:
    vm.message = "Welcome home.";
  }
})();