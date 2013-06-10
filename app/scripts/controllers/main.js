'use strict';


var app = angular.module('bracketApp')
  .controller('MainCtrl', function ($scope, InstalledComponentsManifest) {
    $scope.awesomeThings = InstalledComponentsManifest;
  });
app.controller('SubordinateCtrl', function ($scope, InstalledComponentsManifest ) {
    $scope.otherThings = InstalledComponentsManifest.other();
  });
