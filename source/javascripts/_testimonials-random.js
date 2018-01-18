var aboutPage = window.location.href.indexOf("about") > -1;
var trainingPage = window.location.href.indexOf("training") > -1;
var nutritionPage = window.location.href.indexOf("nutrition") > -1;
var blogPage = window.location.href.indexOf("blog") > -1;

if ( ! aboutPage && ! trainingPage && ! nutritionPage && ! blogPage) {

  var testimonialDivs = new Array('.ksf-testimonial-1', '.ksf-testimonial-2', '.ksf-testimonial-3', '.ksf-testimonial-4', '.ksf-testimonial-5', '.ksf-testimonial-6');
  var testimonialRandom = testimonialDivs[Math.floor(Math.random()*testimonialDivs.length)];
  $(testimonialRandom).css('display', 'block');
}
