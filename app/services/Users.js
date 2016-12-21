(function () {
    'use strict';

    angular
        .module('mainApp')
        .factory('Users', Users)

    Users.$inject = ['$http'];

    function Users($http) {
        return {
            getUsers: getUsers,
            createUser: createUser,
            deleteUser: deleteUser,
            updateUser: updateUser
        };

        function getUsers() {
            return $http({
                method: 'GET',
                url: '/findAgame/api/Users/listUsers'
            })
        }

        function createUser(data) {
            return $http({
                method: 'POST',
                url: '/findAgame/api/Users/createUser',
                data: JSON.stringify({user: data})
            })
        }

        function deleteUser(data) {
            return $http({
                method: 'DELETE',
                url: '/findAgame/api/Users/deleteUser',
                data: JSON.stringify({user: data})
            })
        }

        function updateUser(data) {
            return $http({
                method: 'PUT',
                url: '/findAgame/api/Users/updateUser',
                data: JSON.stringify({user: data})
            })
        }
    }
})();