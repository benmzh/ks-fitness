var aboutPage = window.location.href.indexOf("about") > -1;
var trainingPage = window.location.href.indexOf("training") > -1;
var nutritionPage = window.location.href.indexOf("nutrition") > -1;
var blogPage = window.location.href.indexOf("blog") > -1;

if ( ! aboutPage && ! trainingPage && ! nutritionPage && ! blogPage) {

  var heroDivs = new Array('.ksf-hero-1', '.ksf-hero-2', '.ksf-hero-3', '.ksf-hero-4', '.ksf-hero-5', '.ksf-hero-6');
  var heroRandom = heroDivs[Math.floor(Math.random()*heroDivs.length)];
  $(heroRandom).css('display', 'block');
}
