// ----------menu-animation---------------

$(document).ready(function () {

    $(window).load(function () {
        $(".preloader").delay(100).fadeOut().remove();
    });

    $('#menuBtn__icon').click(function () {
        $(this).toggleClass('open');
        $('.nav').toggleClass('menu__open');
        if (window.matchMedia('(max-width: 768px)').matches) {
            $('.nav').toggleClass('menu__show');
        }
    });

    // --------------slider-------------------

    $('.realResults-slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 800,
        fade: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    dots: false,
                    arrows: false
                }
            }
        ]
    });

    $('.clients-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 800
    });

    // ---------------tabs---------------
    $('.facts__desc').hide();
    if ($('.facts__desc').hasClass('active-desc'))
        $('.facts__desc.active-desc').show();


    $('.facts__links__list li').click(function (e) {
        e.preventDefault();
        let index = $(this).index();
        let tap = $('.facts__desc:eq(' + index + ')');
        if (window.matchMedia('(max-width: 967px)').matches) {
            $('html, body').animate({ scrollTop: $('.facts').offset().top }, 500);
        }
        if (tap.hasClass('active-desc'))
            return 0;
        else {
            $('.active-desc').hide();
            $('.facts__desc').removeClass('active-desc');
            tap.addClass('active-desc');
            tap.fadeIn(1000, 'swing');
        }
    });

});