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
}).directive('commonFooter', function() {
 return {
   restrict: ['A','E'], // Element, Attribute, Class, coMments
   template: '<div>{{footer}}</div>',
   // compile: function(tElement, tAttrs) { tElement.append('Footer Appended!'); }
   link: function(scope, element, attrs) {
     scope.footer = 'Overridden Footer';
   }
 };
}).directive('commonHeader', function() {
 return {
   controller: function($scope, $element, $attrs) {
   },
   restrict: ['C','M'], // Element, Attribute, Class, coMments
   replace: false, // true: overwrite the original element; false: update content
   priority: 1, // order of application of multiple directives; bigger => higher priority
   terminal: false, // will this priority level be the last one evaluated?
   template: '<div>{{header}}</div>',
   scope: true, // inherits from parent; or
   // scope: { braceboundobj: '@', directobj: '=', boundexpr: '&' }, // for isolated scope,
   // compile: function(tElement, tAttrs) { tElement.append('Footer Appended!'); }
   // transclude: true, // allow ng-transclude attribute 
   // transclude: element, // allow replacement function injected into compile
   // compile: function(tElement, tAttrs, transcludeFn) { return function (scope, el, tAttrs) { transcludeFn(scope, function cloneConnectFn(cElement) { tElement.after('<h2>I was added during compilation </h2>').after(cElement); }); }; }
   link: function(scope, element, attrs) {
     scope.header = 'Overridden Header';
   }
 };
});

