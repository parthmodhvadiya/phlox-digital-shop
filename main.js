$(".open-popup-link").magnificPopup({
    type: "inline",
    midClick: true,
    mainClass: "mfp-fade",
  });
 
  $(window).resize(function () {
    /*If browser resized, check width again */
    if ($(window).width() < 769) {
      $("nav ul").addClass("mfp-hide");
    } else {
      $("nav ul").removeClass("mfp-hide");
    }
  });
  $(window).resize(function () {
    /*If browser resized, check width again */
    if ($(window).width() < 769) {
      $(".open-poppup-link").addClass("mfp-hide");
    } else {
      $(".open-poppup-link").removeClass("mfp-hide");
    }
  });

  AOS.init({
    once: true,
    anchorPlacement: 'top-bottom',
    duration: 800, 
  });