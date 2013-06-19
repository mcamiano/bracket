'use strict';

var app = angular.module('bracketApp');

app.controller('HomeCtrl', function ($scope, Groups) {
  $scope.route = '/home';
  $scope.title = 'Bracket';
  $scope.Groups = Groups;
  $scope.footer = 'Original footer';
  $scope.footer = 'Original header';
});

app.controller('GroupsCtrl', function ($scope, Groups) {
  $scope.route = '/groups';
  $scope.title = 'Bracket';
  $scope.subtitle='Groups';
  $scope.finiteGroups = Groups.fetch();
  $scope.Groups = Groups;
});
