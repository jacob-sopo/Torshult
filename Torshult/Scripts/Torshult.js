$(document).ready(function () {

    var owl = $(".owl-carousel");
    owl.owlCarousel({
        items: 1,
        loop: true,
        center: true,
        margin: 10,
        lazyLoad: true,
        pagination: true,
        responsiveClass: true,
        dots: true,
        //autoplay: true,
        //autoplayTimeout: 3000
        });

    $(".owl-dot").on("click", function() {
        owl.trigger("stop.owl.autoplay");
    });

    $(document).on('click', '[data-toggle="lightbox"]', function (event) {
        event.preventDefault();
        $(this).ekkoLightbox({
            alwaysShowClose: true,
            height: 90
    });
    });    

    //$(document).on('click',
    //    '[data-toggle="lightbox"]',
    //    function (event) {
    //        event.preventDefault();
    //        return $(this).ekkoLightbox({
    //            //onShown: function () {
    //            //    if (window.console) {
    //            //        return console.log('Checking our the events huh?');
    //            //    }
    //            //},
    //            //onNavigate: function (direction, itemIndex) {
    //            //    if (window.console) {
    //            //        return console.log('Navigating ' + direction + '. Current item: ' + itemIndex);
    //            //    }
    //            //},
    //            showArrows: true,
    //            alwaysShowClose: true
    //        });
    //    });


});

//Fix jquery bug in owl carosuel for jquery 3.0
$.fn.andSelf = function () {
    return this.addBack.apply(this, arguments);
}

