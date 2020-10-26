/******************************************
* Esericizio Js-jq-hamburger
* mostrare / nascondere il menu principale
******************************************/

// Riferimenti
  var hamburger = $('.hamburger-menu');
  var menuOpen = $('.header-right > a');
  var menuClose = $('.close');

//Visibilità con Show e Hide
menuOpen.click( function(){
  hamburger.show()
});

menuClose.click( function(){
  hamburger.hide()
});
