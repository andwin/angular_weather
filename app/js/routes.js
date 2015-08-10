'use strict';

angular.module('myApp')
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/city/:cityId', {
        templateUrl: '/views/controllers/city/show.html',
        controller: 'CityController',
      })
      .when('/', {
        templateUrl: 'views/index.html',
      })
      .when('/about', {
        templateUrl: 'views/about.html',
      })
      .otherwise({
        redirectTo: '/',
      });
  }]);
