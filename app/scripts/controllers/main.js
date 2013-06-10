'use strict';

angular.module('pguNowApp')
  .controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

        $scope.callServer = function() {
            $http.get('hello').success(function(data) {
                $scope.server_answer = data + ' ' + (new Date()).getTime();
            });
        };
  }]);
