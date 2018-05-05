$(document).ready(function () {


  /*$('a#quienessomos').click(function(e) {
    e.preventDefault();
    var quienessomos = $(this).attr('href');
    
    $('[href="index.html"], html, body').animate({

      scrollTop:$(quienessomos).offset().top

    }, 1500);

  });*/

  
  /*$("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });*/

  


 


















  

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


              // Add smooth scrolling to all links in navbar + footer link






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





});

