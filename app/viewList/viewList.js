'use strict';

angular.module('myApp.viewList', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewList', {
    templateUrl: 'viewList/viewList.html',
    controller: 'ViewListCtrl'
  });
}])

.controller('ViewListCtrl', ['$scope','$http', function($scope, $http) {
	$http.get('data.json').
		success(function (data, status, headers, config) {
			alert("success");
			$scope.myData = data.people;
		}).error(function (data, status, headers, config) {
			alert("something went wrong");
		});

}]);