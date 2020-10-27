/******************************************
* Esericizio Js-jq-hamburger
* mostrare / nascondere il menu principale
******************************************/

// Riferimenti
  var hamburger = $('.hamburger-menu');
  var menuOpen = $('.header-right > a');
  var menuClose = $('.close');

// Visibilità con Show e Hide
menuOpen.click( function(){
  hamburger.show()
});

menuClose.click( function(){
  hamburger.hide()
});

// Visibilità con fadeIn e fadeOut
menuOpen.click( function(){
  hamburger.fadeIn()
});

menuClose.click( function(){
  hamburger.fadeOut()
});

//  Visibilità con aggiunta/rimozione della classe ".active"
menuOpen.click( function(){
  hamburger.addClass('active')
});

menuClose.click( function(){
  hamburger.removeClass('active')
});
