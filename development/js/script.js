
$(function () {
    
    $('.header__burger').click(function (event) {
        $(this).toggleClass('header-burger-active');
        $('.header__wrapper').slideToggle();
    });


    $('.onboarding__arrow').click(function (event) {
        $(this).toggleClass('onboarding__arrow-active');
        $('.test').slideToggle(300);
    });

    AOS.init();

    new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        breakpoints: {
            1440: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            200: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });


    $(".button-popup").click(function() {
        $(".popup").fadeIn(300);
    });
	$(".popup__close").click(function() {
        $(".popup").fadeOut(300);
    });

    $(".button-popup-active").click(function() {
        $(".popup-active").fadeIn(300);
    });
	$(".popup-active__close").click(function() {
        $(".popup-active").fadeOut(300);
    });
    
})

const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
    utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});





