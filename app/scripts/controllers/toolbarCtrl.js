'use strict';

angular.module('pguNowApp').controller('ToolbarCtrl', ['$scope', '$location', function ($scope, $location) {

    function App(name, hash) {
        this.name = name;
        this.hash = hash;
    }

    var dashboard = new App('Dashboard', 'dashboard');
    var todos = new App('TODOs', 'todos');
    var gameA = new App('Game A', 'gameA');

    $scope.apps = [dashboard, todos, gameA];

    $scope.goTo = function(app) {
        $location.path(app.hash);
    };

}]);