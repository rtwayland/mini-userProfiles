angular.module('userProfiles')
    .controller('MainController', function($scope, mainService) {

        $scope.getUsers = function() {
            mainService.getUsers()
            .then(function (res) {
              // console.log(res);
              $scope.users = res.data.data;
              // console.log($scope.users);
            });
        }

        $scope.toggleFavorite = mainService.toggleFavorite;

        $scope.init = (function() {
            $scope.getUsers();
        })();
    });
