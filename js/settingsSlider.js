$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 4,
        loop:true,
        margin:40,
        nav:true,
        autoplay: true,
        autoplayTimeout: 2000,
        dots: false,
        responsive:{
            0:{
                items: 1,
                nav:false
            },
            570:{
                items:2
            },
            770:{
                items:3
            },
            970:{
                items:4
            }
        }
    });

    let reviewsLeftBtn = document.querySelector('.reviews_left_btn');
    let reviewsRightBtn = document.querySelector('.reviews_right_btn');
    reviewsLeftBtn.addEventListener('click', function(){
        $('.reviews_slider').trigger('prev.owl.carousel');
    });
    reviewsRightBtn.addEventListener('click', function(){
        $('.reviews_slider').trigger('next.owl.carousel');
    });
});