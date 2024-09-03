$(document).ready(function(){
    $('.projects-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});
