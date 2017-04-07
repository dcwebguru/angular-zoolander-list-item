angular.module('myApp.services', [])
  .factory('zooService', function($http) {

    var zooCage = {};

    zooCage.getDrivers = function() {
      return $http({
        method: 'JSONP', 
        url: 'data.json'
      });
    }

    return zooCage;
  });