(function() {
  "use strict";

  angular
    .module("app")
    .config(configure);

  /* @ngInject */
  function configure($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect here:
    $urlRouterProvider
      .otherwise("/home");

    // Application States/Routes:
    $stateProvider
      // --------------------------------------------------
      // Home:
      // --------------------------------------------------
      .state("home", {
        url: "/home",
        templateUrl: "app/home/home.html",
        controller: "HomeCtrl as vm",
      });
  }
})();
