$(document).ready(function () {
    $(".owl-carousel").owlCarousel(
        {
            margin: 10,
            lazyLoad: true,
            //animateOut: 'fadeOut',
            //items: 1,
            center: true,
            pagination: true,
            responsiveClass: true,
            dots:true,
            responsive: {
                0: {
                    items: 1
                },
                300: {
                    items: 3
                },
                800: {
                    items: 5,
                    loop: false
                }
            }
        });

});

