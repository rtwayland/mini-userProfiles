angular.module('userProfiles')
    .service('mainService', function($http) {


        this.getUsers = function() {
            return $http.get('https://reqres.in/api/users?page=1');
            // return $http({
            //   method: 'GET',
            //   url: 'http://reqres.in/api/users?page=1'
            // });
        }

        this.toggleFavorite = function (index) {
          // data[index].isFavorite = !data[index].isFavorite;
        }
    });
