


jQuery(document).ready(function ($) {
    // اسلایدر اصلی صفحه اول
    $('#slider_pg_1').owlCarousel({
        rtl: true,
        navText: ['<span class="t-icon t-prev"></span>', '<span class="t-icon t-next"></span>'],
        margin: 20,
        responsive: {
            0: {
                items: 2,
                margin: 20,
                loop: true,
                nav: true,
                dots: true,
            },
            640: {
                items: 1,
                margin: 0,
                loop: false,
                nav: true,
                dots: false,

            }
        }
    });


    // اسلایدر کتگوری ها
    $('#categories_carousel').owlCarousel({
        rtl: true,
        loop: false,
        navText: ['<span class="t-icon t-prev"></span>', '<span class="t-icon t-next"></span>'],
        margin: 10,
        dots: false,
        responsive: {
            0: {
                items: 4,
                margin: 5,
                loop: true,
                stagePadding: 2,
            },
            480: {
                items: 5,
                margin: 10,
                loop: true,
            },
            640: {
                items: 5,
                margin: 15,
                loop: true,
            },
            750: {
                items: 6,
                margin: 10,
                loop: true,
            },
            1025: {
                items: 8,
                nav: true,
                margin: 10,
            }
        }
    });


    // اسلایدر بندرها
    $('.banners_3').owlCarousel({
        rtl: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
                loop: true,
                autoplay: true,
            },
            480: {
                items: 2,
                margin: 10,
                autoplay: true,
            },
            770: {
                loop: false,
                autoplay: false,
                items: 3,
                margin: 10,
                mouseDrag: false,
                touchDrag: false,
            },
            1025: {
                loop: false,
                autoplay: false,
                items: 3,
                margin: 30,
                mouseDrag: false,
                touchDrag: false,
            }
        }
    })


    // اسلایدر جدیدترین محصولات
    $('.newest_products_carousel').owlCarousel({
        rtl: true,
        margin: 10,
        loop: false,
        navText: ['<span class="t-icon t-prev"></span>', '<span class="t-icon t-next"></span>'],
        margin: 10,
        dots: false,
        responsive: {
            0: {
                items: 3,
                margin: 5,
                loop: true,
            },
            490: {
                items: 4,
                margin: 10,
                loop: true,
            },
            640: {
                items: 4,
                margin: 15,
                loop: true,
            },
            800: {
                items: 5,
                margin: 15,
                loop: true,
                nav: true,
            },
            1025: {
                items: 6,
                margin: 15,
                nav: true,
            }
        }
    });

    // بخش محصولات تخفیف دار
    $('.offers_products_carousel').owlCarousel({
        rtl: true,
        margin: 10,
        loop: false,
        navText: ['<span class="t-icon t-prev"></span>', '<span class="t-icon t-next"></span>'],
        margin: 10,
        dots: false,
        responsive: {
            0: {
                items: 3,
                margin: 5,
                loop: true,
            },
            490: {
                items: 4,
                margin: 10,
                loop: true,
            },
            640: {
                items: 4,
                margin: 15,
                loop: true,
            },
            800: {
                items: 5,
                margin: 15,
                loop: true,
                nav: true,
            },
            1025: {
                items: 6,
                margin: 15,
                nav: true,
            }
        }
    });

    // اسلایدر بندرها
    $('.banners_4').owlCarousel({
        rtl: true,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 1,
                loop: true,
                autoplay: true
            },
            480: {
                items: 1,
                margin: 10,
                autoplay: true
            },
            610: {
                loop: false,
                autoplay: false,
                items: 2,
                margin: 10,
                mouseDrag: false,
                touchDrag: false,
            },
            750: {
                loop: false,
                autoplay: false,
                items: 2,
                margin: 30,
                mouseDrag: false,
                touchDrag: false,
            },
        }

    })

    // اسلایدر پیشنهاد شگفت انگیز
    $('.offer_products_carousel').owlCarousel({
        rtl: true,
        margin: 10,
        loop: false,
        dots: false,
        navText: ['<span class="t-icon t-prev"></span>', '<span class="t-icon t-next"></span>'],
        responsive: {
            0: {
                items: 3,
                margin: 5,
                loop: true,
            },
            490: {
                items: 4,
                margin: 10,
                loop: true,
            },
            640: {
                items: 4,
                margin: 15,
                loop: true,
            },
            800: {
                items: 5,
                margin: 15,
                loop: true,
            },
            1025: {
                items: 4,
                nav: true,
                margin: 15,
            }
        }
    });


    // اسلایدر لینک های منتخب سایت
    $('.selection_links_carousel').owlCarousel({
        rtl: true,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 1,
                loop: true,
                autoplay: true,
            },
            330: {
                items: 2,
                margin: 5,
                autoplay: true,
            },
            580: {
                loop: true,
                items: 3,
                margin: 10,
                autoplay: true,
            },
            750: {
                loop: false,
                autoplay: false,
                items: 4,
                margin: 10,
                mouseDrag: false,
                touchDrag: false
            },
            1025: {
                loop: false,
                autoplay: false,
                items: 4,
                margin: 30,
                mouseDrag: false,
                touchDrag: false
            },
        }
    });


    // اسلایدر خدمات سایت
    $('.services_carousel').owlCarousel({
        rtl: true,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 4,
                margin: 5,
                loop: true,
                autoplay: true,
            },
            480: {
                items: 4,
                margin: 5,
                loop: true,
                autoplay: true,
            },
            600: {
                items: 4,
                margin: 10,
                loop: true,
                autoplay: true,
            },
            750: {
                items: 5,
                margin: 10,
                loop: true,
                autoplay: true,
            },
            1025: {
                loop: false,
                autoplay: false,
                items: 6,
                margin: 10,
                touchDrag: false,
                mouseDrag: false
            },
        }
    });


    // اسلایدر جدیدترین محصولات
    $('.products_carousel').owlCarousel({
        rtl: true,
        dots: false,
        loop: false,
        responsive: {
            0: {
                items: 3,
                margin: 5,
                loop: true,
            },
            490: {
                items: 4,
                margin: 10,
                loop: true,
            },
            640: {
                items: 4,
                margin: 15,
                loop: true,
            },
            800: {
                items: 5,
                margin: 15,
                loop: true,
            },
            1025: {
                items: 6,
                margin: 15,
            }
        }
    });

    // اسلایدر وبلاگ

    $(".weblog_carousel").owlCarousel({
        rtl: true,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 2,
                margin: 10,
                loop: true,
            },
            640: {
                items: 3,
                margin: 10,
                loop: true,
            },
            800: {
                items: 4,
                margin: 10,
                loop: true,
            },
            1025: {
                loop: false,
                items: 4,
                margin: 10,
                touchDrag: false,
                mouseDrag: false
            },
        }
    });
});

