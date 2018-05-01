$(document).ready(function () {

//scrollpsy
  $('body').scrollspy({ target: '#navbarNavDropdown' })
    
    
    $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });
  
        $('.scrollup').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });
    




    $("#enviadatos").click(function () {
		var mail = $("#correo").val();
		var mensaje = $("#mensajecliente").val();  
    
    
    if (($("#correo").val().length == 0)) {
			$("#validadorcorreo").fadeIn("slow");
			return false;
		}
            else {$("#validadorcorreo").fadeOut("slow");	
		         }
    
    
    if (($("#mensajecliente").val().length == 0)) {
			$("#validadormensaje").fadeIn("slow");
			return false;
		}
            else {$("#validadormensaje").fadeOut("slow");	
		         }
    
    
});




   // Add smooth scrolling to all links in navbar + footer link

  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
      }
    });
  });


});

