// ----------menu-animation---------------

$(document).ready(function () {
    $('#menuBtn__icon').click(function () {
        $(this).toggleClass('open');
        $('.nav').toggleClass('menu__hidden');
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
        cssEase: 'linear'
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
    if($('.facts__desc').hasClass('active-desc'))
        $('.facts__desc.active-desc').show();

        
    $('.facts__links__list li').click(function (e) {
        e.preventDefault();
        var index = $(this).index();
        var tap = $('.facts__desc:eq('+index+')');
        if (tap.hasClass('active-desc')) 
            return 0;
        else {
            $('.active-desc').hide();
            $('.facts__desc').removeClass('active-desc');
            tap.addClass('active-desc');
            tap.fadeIn(1000, 'swing');
        }
    })
});