$(document).ready(function () {
    $(".owl-carousel").owlCarousel(
        {
            items: 2,
            loop: true,
            center: true,
            margin:10,
            lazyLoad: true,
            pagination:true,
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
                    items: 5
                }
            }
        });

});

