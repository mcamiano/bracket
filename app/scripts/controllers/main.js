'use strict';

var app = angular.module('bracketApp');

app.controller('HomeCtrl', function ($scope, Groups) { // ,$speechRecognition) {
  $scope.route = '/home';
  $scope.title = 'Bracket';
  $scope.Groups = Groups;
  $scope.footer = 'Original footer';
  $scope.footer = 'Original header';

  /*
  $scope.recognition = {};
  $scope.handleSomething = function(e) {
    var parts = e.split(' ');
    if (parts.length > 1) {
      //$scope.newTodo = parts.slice(1).join(' ');
      //$scope.addTodo();
      //$scope.$apply();
      console.log(parts);
    } else {
      console.log('unrecognized sounds');
    }
  };
  $scope.recognition['en-US'] = {
    'doSomething': {
      'regex': /^go .* groups/gi,
      'lang': 'en-US',
      'call': function(e){
          $scope.handleSomething(e);
      }
    }
  };

  var LANG = 'en-US';
  $speechRecognition.onstart(function(){
    $speechRecognition.speak('Hey, buddy! How\'s it hanging?');
  });
  $speechRecognition.onerror(function(e){
		var error = (e.error || '');
		console.log('An error occurred ' + error);
	});
  $speechRecognition.payAttention();
  $speechRecognition.setLang(LANG);
  $speechRecognition.listen();
  $speechRecognition.listenUtterance($scope.recognition['en-US']['doSomething']);
 */
});

app.controller('GroupsCtrl', function ($scope, Groups) {
  $scope.route = '/groups';
  $scope.title = 'Bracket';
  $scope.subtitle='Groups';
  $scope.finiteGroups = Groups.fetch();
  $scope.Groups = Groups;
  $scope.nonEmpty = function(v) {
    return !!v;
  }
});
