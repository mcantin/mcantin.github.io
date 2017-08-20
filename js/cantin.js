//$('#topnav').load('/menu.html');

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items: 2,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
        });

    $("#heros").click(function(){
        $(this).html("<p>Thank you for voting!</p>");
    })

    // Enable Carousel Controls
/*    $(".left").click(function(){
        $("#myCarousel").carousel("prev");
    });*/
});

function emailme(){
    window.location = "mailto:mcantin@live.com";
}