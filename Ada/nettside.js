$(document).ready(function(){
    $("#hovedoverskrift").css("opacity", 1);
        $("#hovedoverskrift").mouseenter(function() {

            $(this).animate({opacity: 0.6});
        });
            $("#hovedoverskrift").mouseleave(function(){
            $(this).animate({opacity: 1});
        });


    $(document).ready(function(){
    $(".navbar-brand").css("opacity", 1);
        $(".navbar-brand").mouseenter(function() {

            $(this).animate({opacity: 0.4});
        });
            $(".navbar-brand").mouseleave(function(){
            $(this).animate({opacity: 1});
        });
    

    });
    $(document).ready(function(){
    $(".nav-item").css("opacity", 1);
        $(".nav-item").mouseenter(function() {

            $(this).animate({opacity: 0.6});
        });
            $(".nav-item").mouseleave(function(){
            $(this).animate({opacity: 1});
        });
    
    });
    

$(document).ready(function(){
    $("#kortbilde").css("opacity", 0.5);
        $("#kortbilde").mouseenter(function() {

            $(this).animate({opacity: 1});
        });
            $("#kortbilde").mouseleave(function(){
            $(this).animate({opacity: 0.5});
        });
    
    });
});
