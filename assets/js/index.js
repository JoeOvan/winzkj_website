$(function() {

    var swiper = new Swiper('.news-swiper-wrap', {
        slidesPerView: 3,
        spaceBetween: 0,
        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


    const tilt = $('.js-tilt').tilt();

});
