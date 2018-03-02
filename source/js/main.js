// ----------menu-animation---------------

$(document).ready(function(){
	$('#menuBtn__icon').click(function(){
        $(this).toggleClass('open');
        $('.nav').toggleClass('menu__hidden');
        if (window.matchMedia('(max-width: 768px)').matches) {
            $('.nav').toggleClass('menu__show');
        }
	});
});