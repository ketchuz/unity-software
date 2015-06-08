var app = angular.module('unity-software');


app.service('MenuAPI', function () {

	this.tags = { 
		a: false
	};


	this.setFalseTag = function () {
		this.tags.a = false;
	};

	
	this.setTrueTag = function () {
		this.tags.a = true;
	};
});