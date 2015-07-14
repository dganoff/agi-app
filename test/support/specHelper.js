"use strict";

var $controller,
    $httpBackend,
    $scope,
    $q;

beforeEach(function() {
  module("app");
  inject(function (_$injector_, _$rootScope_) {
    $scope = (_$rootScope_.$new()).$new();
    $controller = _$injector_.get("$controller");
    $httpBackend = _$injector_.get("$httpBackend");
    $q = _$injector_.get("$q");
  });
});
