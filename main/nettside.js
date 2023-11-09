function toggleVisibility() {
    var info = document.getElementById('info');
    if (info.style.display === 'none') {
      info.style.display = 'block';
      document.getElementById('toggleButton').innerText = "Remove Text";
    } else {
      info.style.display = 'none';
      document.getElementById('toggleButton').innerText = "Rules And Info";
    }
  }


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
    




