$(document).ready(function(){
    $("form").on("click", function(){
     Submit('Your data has been submitted')
    });

    $("#showContactForm").click(function(){
      $("#contactForm").removeClass("displayNone");
    });

    $("#hideContactForm").click(function(){
      $("#contactForm").addClass("displayNone");
    });




  });
 