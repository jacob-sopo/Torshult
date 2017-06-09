$(document).ready(function () {
    $(".owl-carousel").owlCarousel(
        {
            //items: 1,
            //itemsCustom: false,
            //itemsDesktop: [1199, 1],
            //itemsDesktopSmall: [980, 1],
            //itemsTablet: [768, 1],
            //itemsTabletSmall: false,
            //itemsMobile: [479, 1],
            //singleItem: false,
            //itemsScaleUp: false,
            //slideBy: 1

            loop: true,
            margin: 10,
            lazyLoad: true,
            animateOut: 'fadeOut',
            responsiveClass: true,
            items: 1
        });
});

$('.smooth').on('click',
    function () {
        $.smoothScroll({
            scrollElement: $('body'),
            scrollTarget: '#' + this.id
        });

        return false;
    });