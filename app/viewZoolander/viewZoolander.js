'use strict';

angular.module('myApp.viewZoolander', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/zoo/:id', {
    templateUrl: 'viewZoolander/viewZoolander.html',
    controller: 'ViewZoolanderCtrl'
  });
}])

.controller('ViewZoolanderCtrl', ['$scope','$http', '$routeParams', function($scope, $http, $routeParams) {
$scope.zooList = [];

	$http.get('data.json').
		success(function (data, status, headers, config) {
			$scope.person = data.people[$routeParams.id];
			$scope.people = data.people;
		}).error(function (data, status, headers, config) {
			alert("something went wrong");
		});
}]);

