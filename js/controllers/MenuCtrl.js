var app = angular.module('unity-software');

app.controller('MenuCtrl', ['$scope', 'MenuAPI', function ($scope, MenuAPI) {
	$scope.test = "Hello from menu controller";
	var isOpen = false;

	$scope.dropSubmenu = function () {
		if (isOpen) {
			MenuAPI.setFalseTag();
			isOpen = false;
		} else {
			MenuAPI.setTrueTag();
			isOpen = true;
		}
	};

	$scope.setFlag = function () {
		
		MenuAPI.setFalseTag();
	};

	$scope.setOtherFlag = function () {
		MenuAPI.setTrueTag();
	}

	$scope.$watch(function () {
		return MenuAPI.tags;
	}, 

	function(newVal, oldVal) {
		alert("Inside watch");
		console.log('new');
		console.log(newVal);
		console.log('old');
		console.log(oldVal);
	}, true);

}]);