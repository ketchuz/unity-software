var app = angular.module('unity-software')

app.directive('submenu', function () {

	// Initial variables of the directive
	var submenu_open = false;
	var submenu_container;


    // Function to Open the submenu container 
    // with a slide down animation
    function Open ( submenu ) {

    	submenu
    	.slideDown();

    	return( submenu );
    };

    // Function do Close the submenu container
    // with a slide up animation
    function Close ( submenu ) {

    	submenu
    	.slideUp();

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

    	element.on(
    		"click",
    		function handleClickEvent( event ) {

    			// If the menu is already opened
    			// close it
    			if(submenu_open){
    				element.find('span').html('▼');
    				Close(submenu_container);
    				submenu_open = false;
    			} 
                // If the menu is closed,
                // open it
                else {
                	element.find('span').html('▲');
                	Open(submenu_container);
                	submenu_open = true;
                }

            });
    }


});


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