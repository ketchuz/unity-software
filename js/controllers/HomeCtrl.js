var app = angular.module('unity-software');

app.controller('HomeCtrl', ['$scope', function ($scope) {
	$scope.test = "Hello from controller";
}]);