(function ($) {
    'use strict'

    if ($('.navMain').length) {
        // window.onscroll = function () {
        //     myFunction()
        // };

        // var navbar = document.getElementById("navTop");
        // var sticky = navbar.offsetTop;

        // function myFunction() {
        //     if (window.pageYOffset >= sticky) {
        //         navbar.classList.add("sticky")
        //     } else {
        //         navbar.classList.remove("sticky");
        //     }
        // }
        $(window).on('scroll', function () {
            var wScroll = $(this).scrollTop();
            if (wScroll > 100) {
                $('.navMain').addClass('sticky');
            } else {
                $('.navMain').removeClass('sticky');
            };
        });
    }


    if ($('.banner-slid').length) {
        $('.banner-slid').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            infinite: false,
            focusOnSelect: true,
            autoplay: true,
            autoplaySpeed: 3000,
            prevArrow: '<button class="bi bi-chevron-left slide-arrow prev-arrow"></button>',
            nextArrow: '<button class="bi bi-chevron-right slide-arrow next-arrow"></button>',
            
        });
    }

    if ($('.nieuws-slid').length) {
        $('.nieuws-slid').slick({
            dots: false,
            infinite: false,
            speed: 300,
            prevArrow: '<button class="bi bi-chevron-left slide-arrow prev-arrow"></button>',
            nextArrow: '<button class="bi bi-chevron-right slide-arrow next-arrow"></button>',
            autoplay: true,
            autoplaySpeed: 4000,
            responsive: [{
                    breakpoint: 3000,
                    settings: {
                        slidesToShow: 3.1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
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
            autoplay: true,
            autoplaySpeed: 3000,
            prevArrow: '<button class="bi bi-chevron-left slide-arrow prev-arrow"></button>',
            nextArrow: '<button class="bi bi-chevron-right slide-arrow next-arrow"></button>',
            responsive: [ 
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }

    if ($('.team-slid').length) {
        $('.team-slid').slick({
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2500,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }

    if ($('.inner-slider').length) {
        $('.inner-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            infinite: false,
            focusOnSelect: true,
            prevArrow: false,
            nextArrow: false,
            autoplay: true,
            autoplaySpeed: 2500,
        });
    }



    if ($('#scroll-top').length) {
        function scrollToTop() {
            var $scrollUp = $('#scroll-top'),
                $lastScrollTop = 0,
                $window = $(window);

            $window.on('scroll', function () {
                var st = $(this).scrollTop();
                if (st > $lastScrollTop) {
                    $scrollUp.removeClass('show');
                } else {
                    if ($window.scrollTop() > 200) {
                        $scrollUp.addClass('show');
                    } else {
                        $scrollUp.removeClass('show');
                    }
                }
                $lastScrollTop = st;
            });

            $scrollUp.on('click', function (evt) {
                $('html, body').animate({
                    scrollTop: 0
                }, 600);
                evt.preventDefault();
            });
        }
        scrollToTop();
    }





})(jQuery);