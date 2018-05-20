$(document).ready(function () {

    
    /*$('a#quienessomos').click(function(e) {
    e.preventDefault();
    var quienessomos = $(this).attr('href');
    
    $('[href="index.html"], html, body').animate({

      scrollTop:$(quienessomos).offset().top

    }, 2000);

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


    

          //Validacion datos de formulario

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

