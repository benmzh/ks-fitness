var trainingPage = window.location.href.indexOf("training") > -1;
var nutritionPage = window.location.href.indexOf("nutrition") > -1;

if ( trainingPage || nutritionPage ) {

  var strong = document.getElementById("ksf-selector-item-strong");
  var fit = document.getElementById("ksf-selector-item-fit");
  var lean = document.getElementById("ksf-selector-item-lean");

  document.getElementById("ksf-selector-item-strong").addEventListener("click", function(e) {
    $(".ksf-menu").css('background-color', '#D0011B');
    $(".ksf-page-heading-bar").css('background-color', '#D0011B');
    $(".ksf-sign-up-container").css('background-color', '#D0011B').css('color', '#D0011B');
    $(".ksf-call-to-action-container").css('background', '#D0011B').css('color', '#D0011B');
    $(".ksf-divider").css('background', '#D0011B');
    $(".ksf-taster-more-button").css('border-color', '#D0011B').css('color', '#D0011B');
    $(".ksf-footer").css('background-color', '#D0011B').css('color', '#D0011B');
    $("p.ksf-footer-phone-number").css('color', '#FFFFFF');
    if ($("#ksf-selector-item-strong").hasClass("ksf-selector-item-left")) {
      $(".ksf-selector-item-strong").removeClass('ksf-selector-item-left').addClass('ksf-selector-item-centre').css('z-index', '3');
      $(".ksf-selector-item-fit").removeClass('ksf-selector-item-centre').addClass('ksf-selector-item-right').css('z-index', '2');
      $(".ksf-selector-item-lean").removeClass('ksf-selector-item-right').addClass('ksf-selector-item-left').css('z-index', '1');
    } else if ($("#ksf-selector-item-strong").hasClass("ksf-selector-item-centre")) {
    } else {
      $(".ksf-selector-item-strong").removeClass('ksf-selector-item-right').addClass('ksf-selector-item-centre').css('z-index', '3');
      $(".ksf-selector-item-fit").removeClass('ksf-selector-item-left').addClass('ksf-selector-item-right').css('z-index', '1');
      $(".ksf-selector-item-lean").removeClass('ksf-selector-item-centre').addClass('ksf-selector-item-left').css('z-index', '2');
    }
  });

  document.getElementById("ksf-selector-item-fit").addEventListener("click", function(e) {
    $(".ksf-menu").css('background-color', '#4990E2');
    $(".ksf-page-heading-bar").css('background-color', '#4990E2');
    $(".ksf-sign-up-container").css('background-color', '#4990E2').css('color', '#4990E2');
    $(".ksf-call-to-action-container").css('background', '#4990E2').css('color', '#4990E2');
    $(".ksf-divider").css('background', '#4990E2');
    $(".ksf-taster-more-button").css('border-color', '#4990E2').css('color', '#4990E2');
    $(".ksf-footer").css('background-color', '#4990E2').css('color', '#4990E2');
    $("p.ksf-footer-phone-number").css('color', '#FFFFFF');
    if ($("#ksf-selector-item-fit").hasClass("ksf-selector-item-left")) {
      $(".ksf-selector-item-fit").removeClass('ksf-selector-item-left').addClass('ksf-selector-item-centre').css('z-index', '3');
      $(".ksf-selector-item-lean").removeClass('ksf-selector-item-centre').addClass('ksf-selector-item-right').css('z-index', '2');
      $(".ksf-selector-item-strong").removeClass('ksf-selector-item-right').addClass('ksf-selector-item-left').css('z-index', '1');
    } else if ($("#ksf-selector-item-fit").hasClass("ksf-selector-item-centre")) {
    } else {
      $(".ksf-selector-item-fit").removeClass('ksf-selector-item-right').addClass('ksf-selector-item-centre').css('z-index', '3');
      $(".ksf-selector-item-lean").removeClass('ksf-selector-item-left').addClass('ksf-selector-item-right').css('z-index', '1');
      $(".ksf-selector-item-strong").removeClass('ksf-selector-item-centre').addClass('ksf-selector-item-left').css('z-index', '2');
    }
  });

  document.getElementById("ksf-selector-item-lean").addEventListener("click", function(e) {
    $(".ksf-menu").css('background-color', '#417505');
    $(".ksf-page-heading-bar").css('background-color', '#417505');
    $(".ksf-sign-up-container").css('background-color', '#417505').css('color', '#417505');
    $(".ksf-call-to-action-container").css('background', '#417505').css('color', '#417505');
    $(".ksf-divider").css('background', '#417505');
    $(".ksf-taster-more-button").css('border-color', '#417505').css('color', '#417505');
    $(".ksf-footer").css('background-color', '#417505').css('color', '#417505');
    $("p.ksf-footer-phone-number").css('color', '#FFFFFF');
    if ($("#ksf-selector-item-lean").hasClass("ksf-selector-item-left")) {
      $(".ksf-selector-item-lean").removeClass('ksf-selector-item-left').addClass('ksf-selector-item-centre').css('z-index', '3');
      $(".ksf-selector-item-strong").removeClass('ksf-selector-item-centre').addClass('ksf-selector-item-right').css('z-index', '2');
      $(".ksf-selector-item-fit").removeClass('ksf-selector-item-right').addClass('ksf-selector-item-left').css('z-index', '1');
    } else if ($("#ksf-selector-item-lean").hasClass("ksf-selector-item-centre")) {
    } else {
      $(".ksf-selector-item-lean").removeClass('ksf-selector-item-right').addClass('ksf-selector-item-centre').css('z-index', '3');
      $(".ksf-selector-item-strong").removeClass('ksf-selector-item-left').addClass('ksf-selector-item-right').css('z-index', '1');
      $(".ksf-selector-item-fit").removeClass('ksf-selector-item-centre').addClass('ksf-selector-item-left').css('z-index', '2');
    }
  });

}
