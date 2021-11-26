/*
    Selles failis on avalehe kood.
*/
/*
  juhend: https://codetea.com/css-scroll-down-button/
*/
$(function() {
  $('a[href*=#]').on('click', function(e) { // kui vastavale elemendile vajutatakse siis funktsioon kutsutakse välja
    e.preventDefault(); // väldib vaikimisi klõpsu
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear'); // määrab kerimisele vastavad parameetrid näiteks millisekundid kaua kerimisele kulub.
  });
});
