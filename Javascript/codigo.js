$(document).ready(function () {
    




















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
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    
    if (this.hash !== "") {
      
      event.preventDefault();

      // Store hash
      var hash = this.hash;

     
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        window.location.hash = hash;
      });
    } // End if
  });
  
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

