// (function($, undefined) {
    
// })(jQwery);

// Для галлереи картинок
var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    columnWidth: '.grid-sizer',
    gutter: 10
  }
})

// фильтрация по кнопке
$('.filters-button-group').on( 'click', 'btn-filter', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
  alert("Привет");
});
//Конец Для галлереи картинок


//Инициализация плагина Slick
$('.slider').slick({
	arrows: false,
	dots: true 
});
//Конец Инициализация плагина Slick


//Инициализация карусели плагина Slick
$('.carousel').slick({
	// slidesToShow : 4,
	// slidesToScroll: 2,
	// prevArrow: '<img class="slick-prev" src="Img/Arrow-prev.png">',	
 //  nextArrow: '<img class="slick-next" src="Img/Arrow-next.png">',
 //  dots: true
    
});
// Инициализация карусели плагина Slick




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
	});
	// Конец Плавная прокрутка

$('#next_link').on('click', function (event) {
		event.preventDefault();
		var link = $(this).attr('href');
		var distance = $(link).offset().top;

		$('html, body').animate({
			scrollTop: distance
		}, 500);
		
		$('.menu__link.active').removeClass('active');
		$(this).addClass('active');
	});


});



$(window).scroll(function() {

	var distPortfolio = $('#portfolio').offset().top;
	if ($(window).scrollTop() >= distPortfolio) {
		$('.header').css('background', 'rgba(255,255,255,0.7)');
	} else {
		$('.header').css('background', 'transparent');
		}
});


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
		url: 'img/favicon1.png', 
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

	function markerCenter() {
		google.maps.event.addDomListener(window, 'resize', function() {
			var center = map.getCenter()
			google.maps.event.trigger(map, "resize")
			map.setCenter(center)
		})
	}

}
// КОНЕЦ Инициализация Карты Google с маркером