'use strict';

angular.module('bracketApp', ['ngResource','ngSanitize']) // ,'adaptive.speech'])
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
      var r=new Array();
      for (var i=1; i<this.max; ++i) { r[i-1]=i; }
      return r;
    };
    return config;
}).filter('filterByGenerator', function () {
  return function byGeneratorFilter(input,exemplar) {
    var out=[];
    // var re=new RegExp(exemplar);
    if (!Array.isArray(input)) { return input; }
    if (typeof exemplar == 'undefined') { return input;}
    if (exemplar == '') { return input;}
    var generator=parseInt(exemplar);
    for (var i in input) {
      if (i<generator) continue;
      if ( gcd(i, generator) == 1 ) { // (re.test(""+i)) {
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
   scope: true, // inherits from parent; or use parents scope
   // scope: { braceboundobj: '@', directobj: '=', boundexpr: '&' }, // for isolated scope,
   // compile: function(tElement, tAttrs) { tElement.append('Footer Appended!'); }
   // transclude: true, // allow ng-transclude attribute 
   // transclude: element, // allow replacement function injected into compile
   // compile: function(tElement, tAttrs, transcludeFn) { return function (scope, el, tAttrs) { transcludeFn(scope, function cloneConnectFn(cElement) { tElement.after('<h2>I was added during compilation </h2>').after(cElement); }); }; }
   link: function(scope, element, attrs) {
     scope.header = 'Overridden Header';
   }
 };
}).directive('delimiter', function() {
  return {
    compile: function( element, attributes ) {
      var content = element.html().replace(/$/,function(){
        return attributes.delimiter;
      });
      element.html(content);
    },
    priority: 1001,
    restrict: 'A'
  };
}).directive('wrapper', function() {
  return {
    compile: function( element, attributes ) {
      if (!attributes.wrapper) return;
      console.log(attributes.wrapper);
      var startwrap=attributes.wrapper[0];
      var endwrap=attributes.wrapper[1];
      var content = element.html().replace(/$/,endwrap).replace(/^/,startwrap);
      element.html(content);
    },
    priority: 1002,
    restrict: 'A'
  };
});

function gcd(a, b){
   if(a == 0) return b;
   if(b == 0) return a;
   if(a > b) return gcd(b, a % b);
   return gcd(a, b % a);
}

