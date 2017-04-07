'use strict';

angular.module('myApp.viewZoolander', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/zoo/:id', {
    templateUrl: 'viewZoolander/viewZoolander.html',
    controller: 'ViewZoolanderCtrl'
  });
}])

.controller('ViewZoolanderCtrl', ['$scope','$http', function($scope, $http, $routeParams) {

	$http.get('data.json').
		success(function (data, status, headers, config) {
			$scope.myData = data.people;
		}).error(function (data, status, headers, config) {
			alert("something went wrong");
		});

}]);

