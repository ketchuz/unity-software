var app = angular.module('unity-software');

app.controller('MenuCtrl', ['$scope', 'MenuAPI', '$location', function ($scope, MenuAPI, $location) {
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


	$scope.getClass = function(path) {
	    if ($location.path().substr(0, path.length) == path) {
	      return "active"
	    } else {
	      return ""
	    }
	}


}]);