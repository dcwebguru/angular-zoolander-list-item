'use strict';

angular.module('myApp.viewZoo', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/zoo', {
    templateUrl: 'viewZoo/viewZoo.html',
    controller: 'ViewZooCtrl'
  });
}])

.controller('ViewZooCtrl', ['$scope','$http', function($scope, $http) {
    $scope.nameFilter = null;
    $scope.driversList = [];
    $scope.searchFilter = function (driver) {
        var re = new RegExp($scope.nameFilter, 'i');
        return !$scope.nameFilter || re.test(driver.Driver.givenName) || re.test(driver.Driver.familyName);
    };

	$http.get('data.json').
		success(function (data, status, headers, config) {
			$scope.person = data.people;
		}).error(function (data, status, headers, config) {
			alert("something went wrong");
		});

}]);