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
        pageTitle: 'Home',
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        pageTitle: 'About',
      })
      .otherwise({
        redirectTo: '/',
      });
  }])
  .run(['$rootScope', function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current) {
      $rootScope.pageTitle = current.$$route.pageTitle;
    });
  }]);
