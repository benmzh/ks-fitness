if (window.location.href.indexOf("about") > -1) {
    $(".ksf-about-tile-no-colour-bottom").css('background-color', '#4990E2');
  setTimeout(function() {
    $(".ksf-about-tile-no-colour-bottom").css('background-color', '#417505');
  }, 5000);
  setTimeout(function() {
    $(".ksf-about-tile-no-colour-bottom").css('background-color', '#D0011B');
  }, 10000);
    setInterval(function() {
      $(".ksf-about-tile-no-colour-bottom").css('background-color', '#4990E2');
    }, 15000);
  setTimeout(function() {
    setInterval(function() {
      $(".ksf-about-tile-no-colour-bottom").css('background-color', '#417505');
    }, 15000);
  }, 5000);
  setTimeout(function() {
    setInterval(function() {
      $(".ksf-about-tile-no-colour-bottom").css('background-color', '#D0011B');
    }, 15000);
  }, 10000);
}
