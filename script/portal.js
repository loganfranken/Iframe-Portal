$(function() {

	var PORTAL_HEIGHT = 500;
	var PORTAL_WIDTH = 200;
	
	var ANIM_PORTAL_OPEN = 'portal-open, portal-active';
	var ANIM_PORTAL_CLOSE = 'portal-close';

	var $portalWrapper = $('.portal-wrapper');
	var $portal = $('.portal');

	$(document).click(function(event) {
	
		// Clear the animations
		$portal.css({
			'-webkit-animation-name': ANIM_PORTAL_CLOSE,
			'-moz-animation-name': ANIM_PORTAL_CLOSE,
			'-ms-animation-name': ANIM_PORTAL_CLOSE,
			'animation': ANIM_PORTAL_CLOSE
		});
	
		// Retrieve the User's mouse position
		var mouseX = event.pageX;
		var mouseY = event.pageY;
		
		// Position and display the portal
		$portalWrapper
			.hide()
			.css({
				'top': mouseY - PORTAL_HEIGHT/2,
				'left': mouseX - PORTAL_WIDTH/2
			})
			.show();
			
		// Trigger the animations
		$portal.css({
			'-webkit-animation-name': ANIM_PORTAL_OPEN,
			'-moz-animation-name': ANIM_PORTAL_OPEN,
			'-ms-animation-name': ANIM_PORTAL_OPEN,
			'animation': ANIM_PORTAL_OPEN
		});
	
	});

});