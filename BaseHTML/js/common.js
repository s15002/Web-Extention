jQuery(function(){
	jQuery('#to-top').on('click', function(){
		jQuery('html, body').animate({ scrollTop: 0 }, 'slow');
		return false;
	});

	jQuery('#nav-toggle').on('click', function(){
		if (jQuery(this).hasClass('active')) {
			jQuery('#nav-main .nav-root').slideUp();
			jQuery(this).removeClass('active');
		} else {
			jQuery('#nav-main .nav-root').slideDown().css('display', 'flex');
			jQuery(this).addClass('active');
		}
	});

	if (window.matchMedia) {
		jQuery(window).on('resize', function(){
			if (window.matchMedia('(max-width:62em)').matches) {
				jQuery('footer .collapse').collapse('hide');
			} else {
				jQuery('footer .collapse').collapse('show');
				jQuery('#nav-main ul').removeAttr('style');
				jQuery('#nav-toggle').removeClass('active');
			}
		});
		jQuery(window).trigger('resize');
	}
});