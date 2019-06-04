$(window).scroll(function(){
    if ($(window).scrollTop() > 400) {
        $('.header').addClass('scroll');
    }
    else {
        $('.header').removeClass('scroll')
    }
});