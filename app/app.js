'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.viewZoo',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.
	when("/zoo", {templateUrl: "viewZoo/viewZoo.html", controller: "ViewZooCtrl"}).
	when("/zoo/:id", {templateUrl: "viewZoo/viewZoo.html", controller: "ViewZooCtrl"}).
	otherwise({redirectTo: '/zoo'});
}]);