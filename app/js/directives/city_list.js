angular.module("myApp", []).directive('cityList', function() {


//app.directive('cityList', function() {
  return {
    restrict: "E",
    transclude: true,
    replace: true,
    templateUrl: 'views/directives/city_list.html'
  };
});