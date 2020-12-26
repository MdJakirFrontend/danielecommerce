



$(window).on('load', function () {

    // volunteer Counter
    $(function () {
        if ($('.counter').length) {
            let counters = document.querySelectorAll('.counter');
            let speed = 500;
            counters.forEach(function (c) {
                const update = () => {
                    let target = +c.getAttribute('data-target');
                    let currentValue = +c.innerText;
                    let increment = target / speed;
                    if (currentValue < target) {
                        c.innerText = `${currentValue + increment}`
                        setTimeout(update, 2);

                    } else {
                        currentValue.innerText = `${target}`
                    }
                }
                update();
            });
        }
    });


    // dlcarts , .jkcard-close , .jkcard-wrapper-overlay
    $(".dlcarts , .jkcard-close , .jkcard-wrapper-overlay").on('click', function () {
        $(".jkaddcard-wrp").toggleClass('jkcard-wrapper-show');
        console.log("object");
    });

});



jQuery(function ($) {
    "use strict";
    /**-------------------------------------------------
     *Fixed HEader
     *----------------------------------------------------**/
    $(window).on('scroll', function () {

        /**Fixed header**/
        if ($(window).scrollTop() > 250) {
            $('.header').addClass('sticky fade_down_effect');
        } else {
            $('.header').removeClass('sticky fade_down_effect');
        }
    });


    // product-categories slideToggle
    $('.product-categories .cat-item.cat-parent > a').on('click', function (e) {
        e.preventDefault();
        let parentElement = $(this).parent('li');
        $(this).toggleClass('collapsed');
        parentElement.find("> .children").slideToggle(500);
    });



    /* ---------------------------------------------
       site toggle  Menu 
    ------------------------------------------------ */
    $('.dlpopular-sliders ').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        nav: false,
        autoplay: true,
        stagePadding: 30,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            },
            1199: {
                items: 4
            }
        }
    })


    $('.jkleatest-slider ').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        stagePadding: 30,
        navText: ["<img src='../img/jkarrowleft.svg'>", "<img src='../img/jkarrowright.svg'>"],
        navContainer: '.main-content .custom-nav',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    //  testmonia slider  
    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var slidesPerPage = 4;
    var syncedSecondary = true;
    sync1.owlCarousel({
        items: 1,
        slideSpeed: 2000,

        dots: true,
        loop: true,
        nav: false,
        responsiveRefreshRate: 200,
    }).on('changed.owl.carousel', syncPosition);

    sync2
        .on('initialized.owl.carousel', function () {
            sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: slidesPerPage,
            dots: false,
            nav: false,
            smartSpeed: 200,
            slideSpeed: 500,
            items: 3,

            rewind: true,


            slideBy: slidesPerPage,

            responsiveRefreshRate: 100

        }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);
        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }

        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
        }
    }
    sync2.on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });


    // toggle-password
    if ($(".toggle-password").length) {
        $(".toggle-password").click(function () {
            $(this).toggleClass("showOrNot");
            let inputElement = $($(this).attr("toggle"));
            if (inputElement.attr("type") == "password") {
                inputElement.attr("type", "text");
            } else {
                inputElement.attr("type", "password");
            }
        });
    }



});