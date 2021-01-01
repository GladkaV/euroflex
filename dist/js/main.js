'use strict';

$(function () {
    new WOW().init({
        offset: 150,  
    });

    // плавный скрол
    $('a').on('click', function () {
        var el = $(this);
        var dest = el.attr('href');
        if (dest !== undefined && dest !== '') {
            $('html').animate({
                scrollTop: $(dest).offset().top
            }, 500
            );
        }
        return false;
    });

    // menu btn
    $('.header__menu-btn').on('click', function () {
        $('.header__menu-btn').toggleClass('active');
        $('.menu').toggleClass('active');
    })

    $('.menu__list-item a').on('click', function () {
        $('.menu').removeClass('active');
        $('.header__menu-btn').removeClass('active');
    })

    // slider
    $('.production__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: '.production__slider-descr',
    });
    // slider
    $('.production__slider-descr').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.production__slider',
        prevArrow: "<svg class='array array-prev'><path d='M21 41.9996C32.5972 41.9996 42 32.5969 42 20.9996C42 9.40239 32.5973 -0.000367033 21 -0.000368047C9.40276 -0.000369061 2.84974e-06 9.40238 1.83588e-06 20.9996C8.22015e-07 32.5969 9.40275 41.9996 21 41.9996ZM23.1315 8.74963L26.25 11.8121L17.0625 20.9996L26.25 30.1871L23.1315 33.2496L10.9375 20.9996L23.1315 8.74963Z'/></svg>",
        nextArrow: "<svg class='array array-next'><path d='M21 0C9.40275 0 0 9.40275 0 21C0 32.5972 9.40275 42 21 42C32.5972 42 42 32.5972 42 21C42 9.40275 32.5972 0 21 0ZM18.8685 33.25L15.75 30.1875L24.9375 21L15.75 11.8125L18.8685 8.75L31.0625 21L18.8685 33.25Z'/></svg>"
    });

    // slider
    $('.company__slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: true,
        prevArrow: "<svg class='array array-prev'><path d='M21 41.9996C32.5972 41.9996 42 32.5969 42 20.9996C42 9.40239 32.5973 -0.000367033 21 -0.000368047C9.40276 -0.000369061 2.84974e-06 9.40238 1.83588e-06 20.9996C8.22015e-07 32.5969 9.40275 41.9996 21 41.9996ZM23.1315 8.74963L26.25 11.8121L17.0625 20.9996L26.25 30.1871L23.1315 33.2496L10.9375 20.9996L23.1315 8.74963Z'/></svg>",
        nextArrow: "<svg class='array array-next'><path d='M21 0C9.40275 0 0 9.40275 0 21C0 32.5972 9.40275 42 21 42C32.5972 42 42 32.5972 42 21C42 9.40275 32.5972 0 21 0ZM18.8685 33.25L15.75 30.1875L24.9375 21L15.75 11.8125L18.8685 8.75L31.0625 21L18.8685 33.25Z'/></svg>",
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    // indystry button hide
    $('.indystry__btn-hide').on('click', function () {
        $('.indystry__items').slideToggle();
        $('.indystry__btn-hide').toggleClass('active');

        // change text
        let text = $('.indystry__btn-text').text();

        if(text === 'скрыть'){
            $('.indystry__btn-text').text('показать');
        } else {
            $('.indystry__btn-text').text('скрыть');
        }
    })
    
    // form
    $('form').on('submit', function (event) {
        event.preventDefault();
        //вывод отправляемых данных в консоль
        console.log($(this).serialize());
    });

    // mask phone
    $('.special-offer input[type=tel]').mask("+7 (999) 999 99 99");
});