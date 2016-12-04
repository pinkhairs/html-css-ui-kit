jQuery(function($) {
	$('.carousel').unslider();
	functions();
	$(window).resize(functions);
});
function functions() {
	$('.tabs-content > div:not(:first-child)').hide();
	$('.tabs nav a').click(function() {
		$('.tabs-content > div').hide();
		$($(this).attr('href')).show();
		$(this).closest('.tabs').find('li').removeClass('active');
		$(this).parent().addClass('active');
		return false;
	});
	$('.unslider-arrow.next').html('<img src="images/right.svg" class="icon">');
	$('.unslider-arrow.prev').html('<img src="images/left.svg" class="icon">');
	if ($(window).width() > 768) {
		$('header:not(.hamburger-menu) .dropdown').hover(function() {
			$(this).find('> ul').show();
		}).mouseleave(function() {
			$(this).find('> ul').hide();
		});
	}
	$('.menu').click(function() {
		$('.site-nav').removeClass('show-menu');
		$(this).parent().siblings('.site-nav').toggleClass('show-menu');
	});
}