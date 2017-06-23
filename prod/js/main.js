// (function($, undefined) {
    
// })(jQwery);

var $topMenu = $('#main-menu');

// == For responsive MENU == 
$('#show_menu').on('click', function () {	
	 if ($topMenu.hasClass('open') ) {
	 		$topMenu.removeClass('open');
	 		$(this).removeClass('open');
	 }
	 else{
	 		$topMenu.addClass('open');
	 		$(this).addClass('open');
	 }
});

$(window).resize(function(){
	if ($(window).width() > 550) {
		$topMenu.removeClass('animation')
			      .removeClass('open');
		$('#show_menu').removeClass('open');
	}
	else {
		$topMenu.addClass('animation');
	}

});


// Для галлереи картинок
var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  // percentPosition: true,
  masonry: {
    // columnWidth: '.grid-sizer',
    columnWidth: 270,
    gutter: 10,
    horizontalOrder: true
  }
});

// фильтрация по кнопке в галлереи картинок
$('.filters-button-group').on( 'click', '.btn-filter', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });

  $('.btn-filter.is-checked').removeClass('is-checked');
	$(this).addClass('is-checked');
});
//Конец Для галлереи картинок


//Инициализация плагина Slick
$('.slider-team').slick({
	arrows: false,
	dots: true 
});

$('.slider-testimonials').slick({
	arrows: false,
	dots: true,
	autoplay: true,
  autoplaySpeed: 4000,
  infinite: true
});
//Конец Инициализация плагина Slick


$(document).ready(function() {
 initMap(); //Функция Инициализации карты

 //Плавная прокрутка к определённой секции по клику на меню навигации
	$('.menu__list').on('click', '.menu__link', function (event) {
		event.preventDefault();
		var link = $(this).attr('href');
		var distance = $(link).offset().top;

		$('html, body').animate({
			scrollTop: distance
		}, 500);
		
		$('.menu__link.active').removeClass('active');
		$(this).addClass('active');

		if ($('#show_menu').hasClass('open')) {
			$('#show_menu').removeClass('open');
			$topMenu.removeClass('open');
		}

	});
	// Конец Плавная прокрутка

$('#next_link, .logo, .btn__team').on('click', function(event) {
		event.preventDefault();
		var link = $(this).attr('href');
		var distance = $(link).offset().top;

		$('html, body').animate({
			scrollTop: distance
		}, 500);

		if ($('#show_menu').hasClass('open')) {
			$('#show_menu').removeClass('open');
			$topMenu.removeClass('open');
		}
});

}); // Конец document.ready

// Функция для подсветки активного пункта меню при прокрутке
function onScroll(){
	var scroll_top = $(window).scrollTop();
	
	$(".menu__link").each(function(){
		var link = $(this).attr("href");
		var target = $(link);

		if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
			$(".menu__link").removeClass("active");
			$(this).addClass("active");
		} else {
			$(this).removeClass("active");
		}
	});
}

$(window).scroll(function() {
	onScroll ();

	var distPortfolio = $('#portfolio').offset().top;
	if ($(window).scrollTop() >= distPortfolio) {
		$('.header').css('background', 'rgba(0,0,0,0.4)');
	} else {
		$('.header').css('background', 'transparent');
		}

});// Конец window).scroll


// Инициализация Карты Google с маркером
function initMap() {

	var chernihiv = {lat: 51.493840, lng: 31.302110};

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 12,
		center: chernihiv,
		scrollwheel: false, // Отключить зум скролом
		mapTitleControl: false //убрать элементы выбора вида карты
	});

	var image = {
		url: 'img/favicon.png', 
		scaledSize : new google.maps.Size(78, 80)
	};

	var marker_chernihiv = new google.maps.Marker({
		position: chernihiv,
		map: map,
		icon: image
	});

	
	var infowindow = new google.maps.InfoWindow({
		content: "Beetroot Academy"
	});

	infowindow.open(map, marker_chernihiv);

	marker_chernihiv.addListener('click', function() {
		infowindow.open(map, marker_chernihiv);
	});

	markerCenter();

	function markerCenter() {
		google.maps.event.addDomListener(window, 'resize', function() {
			var center = map.getCenter()
			google.maps.event.trigger(map, "resize")
			map.setCenter(center)
		})
	}

}
// КОНЕЦ Инициализация Карты Google с маркером