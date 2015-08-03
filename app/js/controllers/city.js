'use strict;'

angular.module('myApp').controller('CityController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
  $scope.name = 'CityController';
  $scope.params = $routeParams;

  var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + $routeParams.cityId;
  $http.get(url).success(function(response) {
    console.log(response);
    $scope.weatherData = response;

    initializeMap(response.coord.lat, response.coord.lon);
  });

  var initializeMap = function(lat, lng) {
    map = new google.maps.Map(document.getElementById('map-canvas'), {
      zoom: 8,
      center: {lat: lat, lng: lng}
    });
  }
}]);
