'use strict';

angular.module('bracketApp', ['ngResource'])
  .config(function ($routeProvider, $locationProvider) {
    // $locationProvider.html5Mode(false); // HTML5 Mode will not work without server URL Rewriting
    $locationProvider.hashPrefix('!'); // hashbang local state fragment seems to screw things up
    $routeProvider
      .when('/home/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/home/groups/', {
        templateUrl: 'views/groups.html',
        controller: 'GroupsCtrl'
      })
      .when('/foo', {
        templateUrl: 'view/groups.html',
        controller: 'GroupsCtrl'
      })
      .otherwise({
        redirectTo: '/home/'
      });
  }).factory('Groups', function() {
    var config={ max: 101 };
    config.fetch = function() {
      return new Array(this.max);
    };
    return config;
});
