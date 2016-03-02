 // var app = angular.module("demoapp", ["openlayers-directive"]);
 //          app.controller('mapController', function ($scope) {
 //              app.extend($scope, {
 //                  center: {
 //                      lat: 51.505,
 //                      lon: -0.09,
 //                      zoom: 8
 //                  }
 //              });
 //           });
 (function(){
 	angular
       .module('uiGmapgoogle-maps')
       .controller('mapController', function ($scope) {
       		$scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
       		// console.log("entra no controller");
       });
 });