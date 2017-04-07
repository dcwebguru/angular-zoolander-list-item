'use strict';

angular.module('myApp.viewZoo', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewZoo', {
    templateUrl: 'viewZoo/viewZoo.html',
    controller: 'ViewZooCtrl'
  });
}])

.controller('ViewZooCtrl', ['$scope','$http', function($scope, $http) {
	$http.get('data.json').
		success(function (data, status, headers, config) {
			$scope.myData = data.people;
		}).error(function (data, status, headers, config) {
			alert("something went wrong");
		});

}]);