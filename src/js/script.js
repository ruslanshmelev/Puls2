$(document).ready(function(){
	$('.carusel-item').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });

/*Табы*/
$('ul.tabs__caption').on('click', 'li:not(.tabs__caption__tab_active)', function() {
    $(this)
      .addClass('tabs__caption__tab_active').siblings().removeClass('tabs__caption__tab_active')
      .closest('div.tabs').find('div.tabs__content').removeClass('tabs__content_active').eq($(this).index()).addClass('tabs__content_active');
  });
  new WOW().init(); 
/*оборотная сторонс*/
function toggleSlide(item) {
	$(item).each(function(i) {
		$(this).on('click', function(e) {
			e.preventDefault();
			$('.tabs-item__dscp').eq(i).toggleClass('tabs-item__dscp_active');
			$('.tabs-item__list').eq(i).toggleClass('tabs-item__list_active');
		})
	});
};

toggleSlide('.tabs-item__dscp__det');
toggleSlide('.tabs-item__list__back');
/*модальные окна*/
$('[data-modal=consultation]').on('click', function() {
    $('.blackout, #consultat').fadeIn('slow');
});
$('[data-modal=sen]').on('click', function() {
    $('.blackout, #mini').fadeIn('slow');
    $('#consultat, #buy').fadeOut('slow');
});
$('.modal__close').on('click', function() {
$('.blackout, #consultat, #buy, #mini').fadeOut('slow');
});

$('.button_min').each(function(i) {
    $(this).on('click', function() {
        $('#buy .modal__subtaitel').text($('.tabs-item__dscp__text').eq(i).text());
        $('.blackout, #buy').fadeIn('slow');
    })
});
    /*Валидация*/
    function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите {0} символа!")
                  },
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                  required: "Пожалуйста, введите свою почту",
                  email: "Неправильно введен адрес почты"
                }
            }
        });
    };

    validateForms('#consultation-form');
    validateForms('#consultat form');
    validateForms('#buy form');

});
