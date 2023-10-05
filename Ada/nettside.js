$(document).ready(function(){
    $("#kortbilde").css("opacity", 0.5);
        $("#kortbilde").mouseenter(function() {

            $(this).animate({opacity: 1});
        });
            $("#kortbilde").mouseleave(function(){
            $(this).animate({opacity: 0.5});
        });
    
    });
