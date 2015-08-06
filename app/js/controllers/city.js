'use strict;'

angular.module('myApp').controller('CityController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
  $scope.name = 'CityController';
  $scope.params = $routeParams;

  var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + $routeParams.cityId + '&amp;units=metric';
  $http.get(url).success(function(response) {
    $scope.weatherData = response;
    $scope.weatherIcon = 'http://openweathermap.org/img/w/' + response.weather[0].icon + '.png';

    initializeMap(response.coord.lat, response.coord.lon);
  });

  var initializeMap = function(lat, lng) {
    map = new google.maps.Map(document.getElementById('map-canvas'), {
      zoom: 8,
      center: {lat: lat, lng: lng}
    });
  }
}]);
