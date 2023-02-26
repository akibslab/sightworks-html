(function ($) {
	"use strict";

	$("header .site_menu").meanmenu({
		meanMenuContainer: ".mobile-menu",
		meanScreenWidth: "767",
		meanExpand: ['<i class="fal fa-plus"></i>'],
	});

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
				$(".grid").isotope({
					layoutMode: "packery",
					itemSelector: ".grid-item",
					// percentPosition: true,
					packery: {
						columnWidth: ".grid-sizer",
						horizontal: true,
					},
				});
			});
		}
	});

	// Sticky Menu
	$(window).on("scroll", function () {
		var scroll = $(window).scrollTop();
		if (scroll < 300) {
			$(".header-area").removeClass("sticky");
		} else {
			$(".header-area").addClass("sticky");
		}
	});

	// Magnific Popup
	// $(".video-play").magnificPopup({
	// 	type: "iframe",
	// });
	//   End  Magnific Popup

	//for menu active class
	$(".portfolio-tab button").on("click", function (event) {
		$(this).siblings(".active").removeClass("active");
		$(this).addClass("active");
		event.preventDefault();
	});

	// Smooth Scroll for IE/ EDGE/ SAFARI
	$("a").on("click", function (event) {
		if (this.hash !== "") {
			event.preventDefault();

			var hash = this.hash;

			$("html, body").animate(
				{
					scrollTop: $(hash).offset().top,
				},
				800,
				function () {
					window.location.hash = hash;
				}
			);
		}
	});
	// End Smooth Scroll for IE/ EDGE/ SAFARI
})(jQuery);
