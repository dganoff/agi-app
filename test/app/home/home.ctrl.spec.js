(function() {
  "use strict";

  describe("HomeCtrl", function() {
    var ctrl;

    beforeEach(function() {
      ctrl = $controller("HomeCtrl");
    });

    it("should have a message property", function() {
      expect(ctrl.message).toBeDefined();
    });
  });
}());