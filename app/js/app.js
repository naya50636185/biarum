$( document ).ready(function() {
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

    $('.slider-home').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('.menu-side a[href^="#"]').click(function () {
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $('html, body').animate( { scrollTop: destination }, 1000 );
        return false;
    });
});
