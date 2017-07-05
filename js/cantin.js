//$('#topnav').load('/menu.html');

$(document).ready(function(){
   $("#myCarousel").carousel();
/*    $(".item").click(function(){
         $("#myCarousel").carousel(1);
    });*/

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