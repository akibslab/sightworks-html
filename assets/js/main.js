(function ($) {
	"use strict";

	// $("header .site_menu").meanmenu({
	// 	meanMenuContainer: ".mobile-menu",
	// 	meanScreenWidth: "767",
	// 	meanExpand: ['<i class="fal fa-plus"></i>'],
	// });

	$("header .menu_bars a").on("click", function () {
		$(".side-menu").addClass("open");
	});

	$(".side-menu .cross-icon-box").on("click", function () {
		$(".side-menu").removeClass("open");
	});

	var wow = new WOW({
		boxClass: "wow", // default
		animateClass: "animated", // default
		offset: 0, // default
		mobile: true, // default
		live: true, // default
	});
	wow.init();

	// clients carousels
	if ($(".clients_active").length > 0) {
		$(".clients_active").slick({
			infinite: true,
			slidesToShow: 6,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 0,
			speed: 3000,
			cssEase: "linear",
			dots: false,
			arrows: false,
			// centerMode: true,
			variableWidth: true,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
					},
				},
			],
		});
	}

	if ($(".testimonial_active").length > 0) {
		$(".testimonial_active").slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			// speed: 1000,
			autoplay: false,
			autoplaySpeed: 3000,
			centerMode: true,
			variableWidth: true,
			touchMove: true,
			cssEase: "ease",
			arrows: true,
			dots: false,
			prevArrow: $(".prev"),
			nextArrow: $(".next"),
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						arrows: false,
						dots: true,
						infinite: false,
					},
				},
			],
		});
	}

	if ($(".projects_active").length > 0) {
		$(".projects_active").slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			centerMode: true,
			centerPadding: "123px",
			autoplay: false,
			autoplaySpeed: 2000,
			speed: 2000,
			dots: false,
			arrows: true,
			prevArrow: $(".Pprev"),
			nextArrow: $(".Pnext"),
			variableWidth: true,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						arrows: false,
						dots: true,
					},
				},
			],
		});
	}
	if ($(".working-process-active").length > 0) {
		$(".working-process-active").slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			centerMode: true,
			autoplay: false,
			autoplaySpeed: 2000,
			speed: 2000,
			dots: false,
			arrows: false,
			dots: true,
			variableWidth: true,
		});
	}

	$("hero-section").vide(
		{},
		{
			muted: true,
			loop: true,
			posterType: "jpg",
			className: "",
		}
	);
	$(window).on("load", function () {
		if ($(".grid").length > 0) {
			$(".grid").imagesLoaded(function () {
				// init Isotope
				$(".grid").packery({
					layoutMode: "packery",
					itemSelector: ".grid-item",
					// percentPosition: true,
					packery: {
						columnWidth: ".grid-sizer",
						// horizontal: true,
					},
				});
			});
		}
	});
})(jQuery);
