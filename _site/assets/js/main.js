//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

	$("a[rel='tooltip']").tooltip();
});

$(".closeQR").click(function(){
	if( $(this).find('i').hasClass("fa-angle-right") ){
		$(this).find('i').removeClass("fa-angle-right").addClass("fa-angle-left");
		$(".QR").animate({ 'right': '-230px'},'slow');
	}else if($(this).find('i').hasClass("fa-angle-left")){
		$(this).find('i').removeClass("fa-angle-left").addClass("fa-angle-right");
		$(".QR").animate({ 'right': '0px'},'slow');
	}
	return false;
});
