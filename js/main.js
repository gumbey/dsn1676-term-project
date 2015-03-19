var $btnShowHide = $('.btn-show-hide');
var $box = $('.box');
var $hOne = $('.none');
var $navBtn = $('.nav-btn');
var $menu = $('.menu');
var $main = $('.main');

$btnShowHide.on('click', function () {
   $box.toggleClass('js-box-show-hide');
   $hOne.removeClass('none');
   sessionStorage.setItem('active','yes');
});

$navBtn.on('click', function () {
  $menu.toggleClass('js-menu-open');
});

if(sessionStorage.getItem('active')){
  $box.toggleClass('js-box-show-hide');
  $hOne.removeClass('none');
}

if ( display === false ) {
  $('.menu').show();
} else if ( display === false ) {
  $('.menu').hide();
}
