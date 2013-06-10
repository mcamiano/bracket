'use strict';

angular.module('bracketApp', ['ngResource'])
  .config(function ($routeProvider, $locationProvider) {
    // $locationProvider.html5Mode(false); // HTML5 Mode will not work without server URL Rewriting
    $locationProvider.hashPrefix('!'); // hashbang local state fragment seems to screw things up
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/subordinate/', {
        templateUrl: 'views/subordinate.html',
        controller: 'SubordinateCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).factory('InstalledComponentsManifest', function() {
    var manifest = [ 'HTML5 Boilerplate', 'AngularJS', 'Karma'
    ];
    manifest.other = function() {
      return [ 'Compass', 'TwitterBootstrap' ];
    };
    return manifest;
});
