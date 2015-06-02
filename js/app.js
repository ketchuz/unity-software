$(document).foundation();

$(function() {
	$(".rslides").responsiveSlides({
		nav: true,
  	speed: 1000,  // Integer: Speed of the transition, in milliseconds
  	timeout: 4000,
  });
});