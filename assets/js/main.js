(function ($) {
    'use strict'


    if ($('.banner-slid').length) {
        $('.banner-slid').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            focusOnSelect: true
        });
    }

    if ($('.nieuws-slid').length) {
        $('.nieuws-slid').slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: '<button class="bi bi-chevron-left slide-arrow prev-arrow"></button>',
            nextArrow: '<button class="bi bi-chevron-right slide-arrow next-arrow"></button>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }

    if ($('.video-popup').length) {
        $('.video-popup').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,

            fixedContentPos: false
        });
    }

    if ($('.testimonial-area').length) {
        $('.testimonial-slid').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.testimonial-dot'
        });
        $('.testimonial-dot').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            centerPadding: '0px',
            asNavFor: '.testimonial-slid',
            dots: false,
            centerMode: true,
            focusOnSelect: true,
            prevArrow: '<button class="bi bi-chevron-left slide-arrow prev-arrow"></button>',
            nextArrow: '<button class="bi bi-chevron-right slide-arrow next-arrow"></button>'
        });
    }

    if ($('.team-slid').length) {
        $('.team-slid').slick({
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3, 
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }







})(jQuery);