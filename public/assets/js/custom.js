(function ($) {


    // // Profile infomation click to hide and show //

    // $(".click1").click(function () {
    //     $(".profile-info-2").hide();
    //     $(".profile-info-3").hide();
    //     $(".profile-info-1").show();
    // });
    // $(".click2").click(function () {
    //     $(".profile-info-1").hide();
    //     $(".profile-info-3").hide();
    //     $(".profile-info-2").show();
    // });
    // $(".click3").click(function () {
    //     $(".profile-info-1").hide();
    //     $(".profile-info-2").hide();
    //     $(".profile-info-3").show();
    // });


    // $(".click1").click(function () {
    //     $(".click1").addClass("fff");
    //     $(".click2").removeClass("fff");
    //     $(".click3").removeClass("fff");
    // })
    // $(".click2").click(function () {

    //     $(".click2").addClass("fff");
    //     $(".click1").removeClass("fff");
    //     $(".click3").removeClass("fff");
    // })
    // $(".click3").click(function () {

    //     $(".click3").addClass("fff");
    //     $(".click1").removeClass("fff");
    //     $(".click2").removeClass("fff");

    // })

    // Testimonials using owlCarousel slider //

    // $('.main-cont').owlCarousel({
    //     items: 1,
    //     loop: true,
    //     margin: 0,
    //     nav: false,
    //     dots: true,
    //     autoplay: true,
    //     autoplayHoverPause: true,
    //     navText: [
    //         "<i class='icofont-rounded-left'></i>",
    //         "<i class='icofont-rounded-right'></i>"
    //     ],
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         600: {
    //             items: 1
    //         },
    //         1000: {
    //             items: 1
    //         }
    //     }
    // })

    // About Us Section using scrollTop class animation //

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 400) {
            $(".aboutscroll").addClass("addaboutscroll");

        } else {
            $(".aboutscroll").removeClass("addaboutscroll");
        }
    });

    // About Us left image using scrollTop class animation //

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 400) {
            $(".clearHeader").addClass("darkHeader");
        } else {
            $(".clearHeader").removeClass("darkHeader");
        }
    });

    // About Us right image using scrollTop class animation //

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 400) {
            $(".slide-img").addClass("slide-right");
        } else {
            $(".slide-img").removeClass("slide-right");
        }
    });


    // About Us Main image using VanillaTilt animation //

    // VanillaTilt.init(document.querySelector(".myimg"), {
    //     max: 15,
    //     speed: 400,
    //     glare: true,
    //     "max-glare": 0.2
    // });

    // About Us button using VanillaTilt animation //

    // VanillaTilt.init(document.querySelector(".profile-button"), {
    //     max: 10,
    //     speed: 300,
    //     glare: true,
    //     "max-glare": 0.2
    // });

    // Move to scrolltop function

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 900) {
            $(".move-top").addClass("move-add");
        } else {
            $(".move-top").removeClass("move-add");
        }
    });

    $(".move-top span i").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 100)
    });

    // Menu contact me click to scroll contact section

    $(".contact").click(function () {
        $("html, body").animate({
            scrollTop: 4680
        }, 150)
    });

    // Menu contact me click to scroll contact section

    $(".aboutme-scroll").click(function () {
        $("html,body").animate({
            scrollTop: 936
        }, 100)
    });


    $(".portfolio-scroll").click(function () {
        $("html, body").animate({
            scrollTop: 2975
        }, 100)
    });


    $(".profile-btn").click(function () {
        $(".profile-btn").addClass("fff");
    })


    $(".design-text .aboutme-scroll").click(function () {
        $(".design-text .aboutme-scroll").addClass("fff");
    })

    $(".design-text .portfolio-scroll").click(function () {
        $(".design-text .portfolio-scroll").addClass("fff");
    })


    // eslint-disable-next-line no-undef
})(jQuery);


