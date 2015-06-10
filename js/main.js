var app = angular.module('unity-software', [
	'ngRoute'
	]);

app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
    // Home
    // .when("/", {templateUrl: "partials/home.html", controller: "HomeCtrl"})
    .when("/home", {templateUrl: "partials/home.html", controller: "HomeCtrl"})
    // Pages
    .when("/webdev", {templateUrl: "partials/services/webdev.html"})
    .when("/mobapps", {templateUrl: "partials/services/mobapps.html"})
    .when("/about", {templateUrl: "partials/about.html"})
    .when("/products", {templateUrl: "partials/products.html"})
    .when("/contact", {templateUrl: "partials/contact.html"})
    // .when("/faq", {templateUrl: "partials/faq.html", controller: "PageCtrl"})
    // .when("/pricing", {templateUrl: "partials/pricing.html", controller: "PageCtrl"})
    // .when("/services", {templateUrl: "partials/services.html", controller: "PageCtrl"})
    // .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
    // Blog
    // .when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
    // .when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})
    // else 404
    .otherwise({
        redirectTo: '/home'
    });
}]);

// app.directive('responsiveslides', function () {
	
// 	return {
// 		// Restrict it to be an attribute in this case
// 		restrict: 'A',
//         // responsible for registering DOM listeners as well as updating the DOM
//         link: function(scope, element, attrs) {
//         	$(element).responsiveSlides(scope.$eval(attrs.responsiveslides));
//         }
//     }
// });