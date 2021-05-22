
  $(".hamburgerMenu").on("click", function(){
    $(".hamburgerMenu").toggleClass("active");
    if ($(".hamburgerMenu").hasClass("active")) {
      $(".mobileNav").css("height", "100vh");
      $("#mobileNavItems").css("opacity","1");
      $(".hamburger").removeClass("open").addClass("closed");
    }
    else {
      $(".mobileNav").css('height', "0vh");
      $("#mobileNavItems").css("opacity","0");
      $(".hamburger").removeClass("closed").addClass("open");
    }
  });
  