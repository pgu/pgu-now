'use strict';

angular.module('pguNowApp').controller('ToolbarCtrl', ['$scope', '$location', function ($scope, $location) {

    function app(name, hash) {
        this.name = name;
        this.hash = hash;
    }

    var dashboard = new app('Dashboard', 'dashboard');
    var todos = new app('TODOs', 'todos');
    var gameA = new app('Game A', 'gameA');

    $scope.apps = [dashboard, todos, gameA];

    $scope.goTo = function(app) {
        $location.path(app.hash);
    };

}]);