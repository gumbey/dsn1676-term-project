var $btnShowHide = $('.btn-show-hide');
var $box = $('.box');
var $hOne = $('.none');

$btnShowHide.on('click', function () {
   $box.toggleClass('js-box-show-hide');
   $hOne.removeClass('none');
   sessionStorage.setItem('active','yes');
});

if(sessionStorage.getItem('active')){
  $box.toggleClass('js-box-show-hide');
  $hOne.removeClass('none');
}

$(document).ready(function(){
  $('.toggle').click(function(){
    $('.menu').slideToggle(700);
    $('.menu').toggle(display);
  });
});

if ( display === false ) {
  $('.menu').show();
} else if ( display === false ) {
  $('.menu').hide();
}
