var app = angular.module('unity-software', [
	'ngRoute'
	]);

app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html"})
    // Pages
    .when("/about", {templateUrl: "partials/about.html"})
    // .when("/faq", {templateUrl: "partials/faq.html", controller: "PageCtrl"})
    // .when("/pricing", {templateUrl: "partials/pricing.html", controller: "PageCtrl"})
    // .when("/services", {templateUrl: "partials/services.html", controller: "PageCtrl"})
    // .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
    // Blog
    // .when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
    // .when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html"});
}]);

app.directive('responsiveslides', function () {
	
	return {
		// Restrict it to be an attribute in this case
		restrict: 'A',
        // responsible for registering DOM listeners as well as updating the DOM
        link: function(scope, element, attrs) {
        	$(element).responsiveSlides(scope.$eval(attrs.responsiveslides));
        }
    }
});