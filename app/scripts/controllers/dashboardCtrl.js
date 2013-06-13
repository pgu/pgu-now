'use strict';

angular.module('pguNowApp').controller('DashboardCtrl', ['$scope', '$timeout', function ($scope, $timeout) {

    function pad(n) {
        return n < 10 ? '0' + n : n;
    }

    function getTimeFormatted(date) {
        return pad(date.getHours())  //
            + ':'                       //
            + pad(date.getMinutes()) //
            + ':'                       //
            + pad(date.getSeconds()) //
            ;
    }

    var currentDate = new Date();
    var currentDay = pad(currentDate.getDate())//
            + '/'                                 //
            + pad(currentDate.getMonth() + 1)  //
            + '/'                                 //
            + currentDate.getFullYear()        //
        ;

    var currentTime = getTimeFormatted(currentDate);

    $scope.title = 'Dashboard';
    $scope.currentDay = currentDay;
    $scope.currentTime = currentTime;

    function updateCurrentTime() {

        var now = new Date();
        $scope.currentTime = getTimeFormatted(now);

        $timeout(function () {
            updateCurrentTime();
        }, 990);
    }

    updateCurrentTime();

}]);
