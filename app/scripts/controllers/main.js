'use strict';

var app = angular.module('bracketApp');

app.controller('HomeCtrl', function ($scope, Groups) {
  $scope.route = '/home';
  Groups.sharedProperty = 'My Shared Property, set only if HomeCtrl is hit prior to access!'
  $scope.Groups = Groups;
});

app.controller('GroupsCtrl', function ($scope, Groups) {
  $scope.route = '/groups';
  $scope.finiteGroups = Groups.fetch();
  $scope.Groups = Groups;
});
