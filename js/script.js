$(document).ready(function(){
    // aos (animate on scroll)
    AOS.init();
    // navbar toggling
    $('#navbar-toggler').click(function(){
        $('.navbar-collapse').slideToggle();
    })


// navbar background change in scrollbar
$(window).scroll(function(){
    let position = $(window).scrollTop();
    if(position >= 80){
        $('.navbar').addClass('bg-navbar');
    } else{
        $('.navbar').removeClass('bg-navbar');
    }
    console.log(position);
});


// popup gallery

$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});
});

// slick slider buttons
$('.testimonial-slider').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 200,
    slidesToShow: 1,
    adaptive: true
})

});

