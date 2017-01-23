$( document ).ready(function() {

    // slider section lorem-1

    $('.slider-home').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    //slider section lorem-2

    $('.slider-carousel').slick({
        dots: false,
        arrows: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 750,
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

    //animation link to anchor

    $('.menu-side a[href^="#"]').click(function () {
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $('html, body').animate( { scrollTop: destination }, 1000 );
        return false;
    });

    // menu toggle

    $('button.menu-icon-open').click(function () {
        $('.navbar-collapse').animate({
            right: '0'
        }, 200);
    });
    $('button.menu-icon-close').click(function () {
        $('.navbar-collapse').animate({
            right: '-100%'
        }, 200);
    });

});
