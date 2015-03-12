var $btnShowHide = $('.btn-show-hide');
var $box = $('.box');
var $btnShow = $('.js-box-show')
var $hOne = $('.none');

$btnShowHide.on('click', function () {
   $box.toggleClass('js-box-show-hide');

});

$btnShow.on('click', function () {
  $hOne.removeClass('none')
});

