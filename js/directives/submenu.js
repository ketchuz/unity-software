var app = angular.module('unity-software')

app.directive('submenu', ['MenuAPI', function (MenuAPI) {

	// Initial variables of the directive
	var submenu_container;


    // Function to Open the submenu container 
    // with a slide down animation
    function Open ( submenu, element) {

    	submenu
    	.slideDown();

    	element.find('span').html('▲');

    	return( submenu );
    };

    // Function do Close the submenu container
    // with a slide up animation
    function Close ( submenu, element ) {

    	submenu
    	.slideUp();

    	element.find('span').html('▼');

    	return( submenu );
    };	


	// Return the directive configuration.
	return({
		link: link,
		restrict: "A"
	});


	// ---
    // PUBLIC METHODS.
    // ---


    // I bind the JavaScript events to the local scope.
    function link( scope, element, attributes ) {

    	// Get the name of the submenu
    	submenu_item = scope.$eval(attributes.submenu).item;

    	// Get the container of the submenu
    	submenu_container = angular.element('#submenu-' + submenu_item);


    	scope.$watch(function () {
		return MenuAPI.tags;
	}, 

	function(newVal, oldVal) {

			// console.log('new');
			// console.log(newVal.a);
			// console.log('old');
			// console.log(oldVal.a);

		if (newVal.a === true){
			console.log('the value is true');
			Open(submenu_container, element)
		}
		else {
			console.log('the value is false');
			Close(submenu_container, element);
		}
	}, true);

}

}]);


app.directive('submenuItem', function () {
	// Initial variables of the directive
	var svgItem;

	// Function to get the svg object
	// depending on the link hovered
	// and change its color
	function subMenu_Hover (name, color) {

		var svgObject = "svgObject-" + name;

		// Get the Object by ID
		var a = document.getElementById(svgObject);
		// Get the SVG document inside the Object tag
		var svgDoc = a.contentDocument;
		// Get one of the SVG items by ID;
		var svgItem = svgDoc.getElementById("icon");
		// Set the colour to something else
		svgItem.setAttribute("fill", color);
	}


	// Return the directive configuration.
	return({
		link: link,
		restrict: "A"
	});

	function link( scope, element, attributes ) {

		// Get the name of the submenu
		svgItem = scope.$eval(attributes.submenuItem).item;

		element.on(
			"mouseenter",
			function handleClickEvent( event ) {
				// Get the name of the submenu
				svgItem = scope.$eval(attributes.submenuItem).item;
				subMenu_Hover(svgItem, "white");
			});

		element.on(
			"mouseleave",
			function handleClickEvent( event ) {
				// Get the name of the submenu
				svgItem = scope.$eval(attributes.submenuItem).item;
				subMenu_Hover(svgItem, "#CDCDCD");
			});

	}

});