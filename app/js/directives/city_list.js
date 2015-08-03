'use strict;'

angular.module("myApp").directive('cityList', ['$http', function($http) {
  return {
    restrict: "E",
    transclude: true,
    replace: true,
    templateUrl: 'views/directives/city_list.html',
    link: function(scope) {
      scope.change = function() {
        var url = 'http://localhost:3000/city-list?q=' + scope.search;
        $http.get(url).success(function(response) {
          scope.cityNames = response;
        });
      };
    }
  };
}]);
