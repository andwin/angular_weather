'use strict';

angular.module('myApp').controller('CityController', ['$scope', '$routeParams', '$http', '$rootScope', function($scope, $routeParams, $http, $rootScope) {
  $scope.name = 'CityController';
  $scope.params = $routeParams;
  $rootScope.pageTitle = $routeParams.cityId;

  var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + $routeParams.cityId + '&units=metric';
  $http.get(url).success(function(response) {

    if (response.cod == '404') {
      $scope.params.cityId = 'City not found';
      return;
    }

    $scope.weatherData = response;

    $scope.weatherIcon = 'http://openweathermap.org/img/w/' + response.weather[0].icon + '.png';

    initializeMap(response.coord.lat, response.coord.lon);
  });

  var initializeMap = function(lat, lng) {
    new google.maps.Map(document.getElementById('map-canvas'), {
      zoom: 8,
      center: {lat: lat, lng: lng},
    });
  };
}]);
