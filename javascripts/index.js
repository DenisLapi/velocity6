// Responsive menu

$(".menu-btn").on("click", function() {
	var navigation = $(".right-side ul");
	if(!navigation.attr("nav-active")) {
		navigation.animate({ height: 180 }, 500);
		navigation.attr("nav-active","true");
	} else {
		navigation.animate({ height: 0 }, 500);
		navigation.removeAttr("nav-active");
	}
});

// Slider width and sizes
var slides = $(".slides");
var slide = $(".slides .slide-li");
var slideCount = slides.children().length;
var slideWidth = (slide.width() * slideCount) + slide.width() + 100;

// slides.width(slideWidth);
