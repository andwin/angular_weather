'use strict;'

angular.module('myApp').controller('CityController', ['$scope', '$routeParams', function($scope, $routeParams) {
  $scope.name = 'CityController';
  $scope.params = $routeParams;
}]);
