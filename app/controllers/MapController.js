(function () {
    'use strict';

    angular
        .module('mainApp')
        .controller('MapController', MapController)

    MapController.$inject = ['$http', 'Events', 'Users'];

    function MapController($http, Events, Users) {
        var vm = this;
        vm.geoLocation = {};
        vm.getLocation = getLocation;
        vm.setLocation = setLocation;
        vm.geoError = geoError;
        vm.map = undefined;
        vm.markers = [];
        vm.getMarkers = getMarkers;
        vm.initMap = initMap;
        vm.createEvent = createEvent;

        vm.getMarkers();

        vm.getLocation();

        function initMap() {
            vm.map = new google.maps.Map(document.getElementById('map'), {
                zoom: 14,
                center: vm.geoLocation
            });

            var numOfMarkers = vm.markers.length;
            var currentMarker;
            while (numOfMarkers) {
                numOfMarkers--;
                currentMarker = {
                    lat: parseFloat(vm.markers[numOfMarkers].lat),
                    lng: parseFloat(vm.markers[numOfMarkers].lng)
                };
                new google.maps.Marker({
                    position: currentMarker,
                    map: vm.map
                });
            }

            vm.map.addListener('click', vm.createEvent);
        }

        function getLocation() {
            navigator.geolocation.getCurrentPosition(vm.setLocation, vm.geoError);
        }

        function setLocation(result) {
            vm.geoLocation = {
                lat: parseFloat(result.coords.latitude),
                lng: parseFloat(result.coords.longitude)
            };
            vm.initMap();
        }

        function geoError(error) {
            //If user dont want to share location, do something here.
        }

        function getMarkers() {
            Events.getEvents().then(function (response) {
                if (response.data.success) {
                    vm.markers = response.data.response;
                }
            });

        }

        function createEvent(location) {

        }
    }
})();