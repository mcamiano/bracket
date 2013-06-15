'use strict';

describe('Controller: HomeCtrl', function () {

  // load the controller's module
  beforeEach(module('bracketApp'));

  var MainCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('HomeCtrl', {
      $scope: scope
    });
  }));

  it('should list the finite Abelian groups up to Z101', function () {
    expect(scope.finite_groups.length).toBe(101);
  });
});
