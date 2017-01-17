angular.module('userProfiles')
    .controller('MainController', function($scope, mainService) {

        $scope.getUsers = function() {
            $scope.users = mainService.getUsers();
        }

        $scope.toggleFavorite = mainService.toggleFavorite;
        
        $scope.init = (function() {
            $scope.getUsers();
        })();
    });
