



$('.kit-check').on('click', function(){
    $('.kit-from-input').toggleClass('cng-money');

    if ($('.kit-from-input').hasClass('cng-money')) {
        document.getElementsByClassName('pkg-cng-one')[0].innerHTML = '$15';
      } else {
        document.getElementsByClassName('pkg-cng-one')[0].innerHTML = '$5.99';
      }
      
      if ($('.kit-from-input').hasClass('cng-money')) {
        document.getElementsByClassName('pkg-cng-two')[0].innerHTML = '$35';
      } else {
        document.getElementsByClassName('pkg-cng-two')[0].innerHTML = '$14.99';
      }
      
      if ($('.kit-from-input').hasClass('cng-money')) {
        document.getElementsByClassName('pkg-cng-three')[0].innerHTML = '$55';
      } else {
        document.getElementsByClassName('pkg-cng-three')[0].innerHTML = '$24.99';
      }
      

});