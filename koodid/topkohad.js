/*
    Selles failis on "Top Kohad" vahelehe kood.
*/
//slaidiesitlustekood on võetud: https://www.w3schools.com/howto/howto_js_slideshow.asp

var slideIndex = [1,1,1,1,1];//slaide algväärtused ehk kõigil esimene pilt
var slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5"];//slaidi esitluste nimed
//avame igas slaidiesitluses esimese pildi:
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);

function plusSlides(n, no) {//no-ndal slaidiesitlusel järgmise või eelmise slaidi avamine
  showSlides(slideIndex[no] += n, no);
}
function currentSlide(n, no) {//no-ndal slaidiesitlusel praeguse slaidi näitamine
  showSlides(slideIndex[no] = n, no);
}
function showSlides(n, no) {//no-ndal slaidiesitlusel n-nda pildi näitamine
  var i;
  var x = document.getElementsByClassName(slideId[no]);//leiame õige slaidiesitluse
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}//muudame n-i sobivaks, kui see on piirkonnast väljas
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  //algul peidame kõik pildid
  }
  x[slideIndex[no]-1].style.display = "block";  //ja siis näitame, ainult ühte õiget
}

//tagasi-üles nupu kood on võetud: https://support.bigcommerce.com/s/question/0D51B00004p7p3F/how-to-create-a-back-to-top-button?language=en_US

mybutton = document.getElementById("myBtn");//tagasi-üles nupp
window.onscroll = function() {scrollFunction()};

function scrollFunction() {//kui kasutaja on lehe ülaservas ei näe ta tagasi-üles nuppu, kui kerib alla, siis näeb
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {//kui kasutaja vajutab tagasi-üles nuppu, siis keritakse leht üles
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}