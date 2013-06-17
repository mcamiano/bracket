'use strict';

angular.module('bracketApp', ['ngResource','ngSanitize'])
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
      var r=new Array(this.max);
      for (var i=0; i<r.length;++i){ r[i]=""+i; }
      return r;
    };
    return config;
}).filter('filterByIndex', function () {
  return function byIdxFilter(input,modl) {
    var out=[];
    var re=new RegExp(modl);
    if (!Array.isArray(input)) { return input; }
    if (typeof modl == 'undefined') { return input;}
    if (modl == '') { return input;}
    for (var i in input) {
      if (re.test(""+i)) {
        out.push(i);
      }
    }
    return out;
  };
});
