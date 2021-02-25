$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: 200,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })

    var typed = new Typed('.type', {
        strings: ['Web Developer', 'Designer', 'Freelencer'],
        // smartBackspace: true // Default value
        typeSpeed: 60,
        backSpeed: 60,
        loop: Infinity

    });




});