'use strict';

angular.module('pguNowApp').controller('GameACtrl', ['$scope', function ($scope) {

    $scope.title = 'Game A';
    $scope.user_word = '';

    var raw_words = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat';
    $scope.words = raw_words.split(' ');

    var idx_word = 0;
    var current_word = $scope.words[idx_word];

    $scope.$watch('user_word', function() {
        console.log($scope.user_word);

        var user_w = $scope.user_word;

        if (   user_w.length > 1
            && user_w.charAt(user_w.length - 1) === ' ') {

            idx_word++;
            current_word = $scope.words[idx_word];
            console.log(current_word);
        }

    })

}]);
