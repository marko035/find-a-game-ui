(function () {
    'use strict';

    angular
        .module('mainApp')
        .factory('Events', Events)

    Events.$inject = ['$http'];

    function Events($http) {
        return {
            getEvents: getEvents,
            createEvent: createEvent,
            deleteEvent: deleteEvent,
            updateEvent: updateEvent
        };

        function getEvents() {
            return $http({
                method: 'GET',
                url: '/findAgame/api/Events/listEvents'
            })
        }

        function createEvent(data) {
            return $http({
                method: 'POST',
                url: '/findAgame/api/Events/createEvent',
                data: JSON.stringify({event: data})
            })
        }

        function deleteEvent(data) {
            return $http({
                method: 'DELETE',
                url: '/findAgame/api/Events/deleteEvent',
                data: JSON.stringify({event: data})
            })
        }

        function updateEvent(data) {
            return $http({
                method: 'PUT',
                url: '/findAgame/api/Events/updateEvent',
                data: JSON.stringify({event: data})
            })
        }
    }
})();