(function () {
    'use strict';

    angular
        .module('mainApp')
        .factory('Events', Events)

    Events.$inject = ['$http'];

    function Events($http){
        return {
            getEvents: getEvents,
            createEvent: createEvent,
            deleteEvent: deleteEvent,
            updateEvent: updateEvent
        };

        function getEvents(){
            return $http.get('/findAgame/api/Events/listEvents')
        }

        function createEvent(){
            return $http.get('/findAgame/api/Events/createEvent')
        }

        function deleteEvent(){
            return $http.get('/findAgame/api/Events/updateEvent')
        }

        function updateEvent(){
            return $http.get('/findAgame/api/Events/deleteEvent')
        }
    }
})();