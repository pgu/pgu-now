'use strict';

angular.module('pguNowApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl'
      })
      .when('/todos', {
        templateUrl: 'views/todos.html',
        controller: 'TodosCtrl'
      })
      .when('/gameA', {
        templateUrl: 'views/gameA.html',
        controller: 'GameACtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
