'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','$http', function($scope, $http) {
         $http.get('data.json').
        success(function (data, status, headers, config) {
            alert("success");
            $scope.myData = data.people;
        }).error(function (data, status, headers, config) {
            alert("something went wrong");
        });
}]);