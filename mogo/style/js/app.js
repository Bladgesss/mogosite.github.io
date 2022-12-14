$(function () {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOfset = $(window).scrollTop();

    /* Fixed Header */

    checkscroll(scrollOfset);

    $(window).on("scroll", function () {  

        scrollOfset = $(this).scrollTop();

        checkscroll(scrollOfset);

    });


    function checkscroll(scrollOfset) {
        scrollOfset = $(this).scrollTop();

        if( scrollOfset >= introH ) {
            header.addClass("fixed");
            
        } else {
            header.removeClass("fixed");
        }
    }

    /* Smooth scroll */

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOfset = $(blockId).offset().top;


        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate( {
            scrollTop: blockOfset
        }, 500);

    });


    /* Burger */

    $("#nav-togle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");

        $("#nav").toggleClass("active");
    });

    /* Collapse */

    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');


        $(blockId).slideToggle();
    });

    /*Slider */

    $("[data-slider]").slick( {
        Infinity: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });


});