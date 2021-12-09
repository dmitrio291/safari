$(function(){

    $('.popup__link').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

	$('.gallery__slider').slick({
		prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-left.svg" alt="Стрелка назад"></button>',
		nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-right.svg" alt="Стрелка вперед"></button>'
	});

	$('.gallery__item-inner').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
	});

	$('.menu__btn').on('click', function() {
		$('.menu__list').toggleClass('menu__list--active');
		$('.menu__btn').toggleClass('menu__btn--active');
		$('body').toggleClass('overflow-hidden');
	});

});