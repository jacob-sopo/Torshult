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
        autoplay: true,
        autoplayTimeout: 3000
        });

    $(".owl-dot").on("click", function() {
        owl.trigger("stop.owl.autoplay");
    });


});

//Fix jquery bug in owl carosuel for jquery 3.0
$.fn.andSelf = function () {
    return this.addBack.apply(this, arguments);
}

