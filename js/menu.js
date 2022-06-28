$(document).ready(function() {
		$('.menuToggle').click(function() {
			$(this).toggleClass('active');
			$('.menu').slideToggle(300, function () {
				if($(this).css('display') === 'none') {
					$(this).removeAttr('style');
				}
			});

			// данный метод:
			// добавляет инлайновый стиль дисплэй block и дисплэй none к меню, 
			// показывает его по клику или скрывает его
		})
})

$(function() {

	var header = $("#header"),
		introH = $("#banner").innerHeight(),
		scrollOffset = $(window).scrollTop();

		/*Fixed Header*/
		checkScroll(scrollOffset);

	$(window).on("scroll", function() {
			scrollOffset = $(this).scrollTop();

			checkScroll(scrollOffset);

	});
	
	function checkScroll(scrollOffset) {
		if( scrollOffset >= introH ) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}
		/*Smooth Scroll-500 милисекунд*/
		$("[data-scroll]").on("click", function(event) {
			event.preventDefault();

			var $this = $(this),
				blockId = $this.data('scroll'),
				blockOffset = $(blockId).offset().top;

		/*Задала активный класс только нажатой ссылке*/
				$("#nav a").removeClass("active");
				$this.addClass("active");

			// console.log(blockOffset);

				$("html, body").animate({
					scrollTop: blockOffset
				}, 500);
		});

		/*Menu Nav toggle-появление и исчезновение меню*/		

		// $("#nav_toggle").on("click", function(event) {
		// 	event.preventDefault();
		
		// $(this).toggleClass("active");
		// $("#nav").toggleClass("active");

		// });

});