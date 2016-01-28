var ViewOneController = require('controllers/view1');
var ViewTwoController = require('controllers/view2');

var app = angular.module('YourAwesomeApplication', ['ngRoute']);

app.config([
  '$routeProvider', '$locationProvider',
  function ($routeProvider, $locationProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'partials/view1.html',
      controller: ViewOneController
    }).when('/view2', {
      templateUrl: 'partials/view2.html',
      controller: ViewTwoController
    }).otherwise({
      redirectTo: '/view1'
    });
    $locationProvider.html5Mode(true);
  }
]);
