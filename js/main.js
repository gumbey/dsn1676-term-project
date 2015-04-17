var $btnShowHide = $('.btn-show-hide');
var $box = $('.box');
var $hOne = $('.none');
var $navBtn = $('.nav-btn');
var $menu = $('.menu');
var $main = $('.main');
var $underCard = $('.nameholder');
var $underCardTwo = $('.nameholder2');
var $underCardThree = $('.nameholder3');
var $mainCard = $('.maincard')
var $mainCardTwo = $('.maincard2')
var $mainCardThree = $('.maincard3')
var $showCard = $('.js-nameholder-on')
var $thumbs = $('.thumbnails');
var $lbImg = $('.lightbox-img');
var $lb = $('.lightbox');
var $btnClose = $('.btn-close');

$(document).ready(function(){
    $mainCard.mouseover(function(){
        $underCard.removeClass('nameholder');
        $underCard.addClass('js-nameholder-on');
    });
    $("p").mouseout(function(){
        $underCard.addClass('nameholder');
        $underCard.removeClass('js-nameholder-on');

    });
});

$(document).ready(function(){
    $mainCardTwo.mouseover(function(){
        $underCardTwo.removeClass('nameholder2');
        $underCardTwo.addClass('js-nameholder-on');
    });
    $("p").mouseout(function(){
        $underCardTwo.addClass('nameholder2');
        $underCardTwo.removeClass('js-nameholder-on');

    });
});

$(document).ready(function(){
    $mainCardThree.mouseover(function(){
        $underCardThree.removeClass('nameholder3');
        $underCardThree.addClass('js-nameholder-on');
    });
    $("p").mouseout(function(){
        $underCardThree.addClass('nameholder3');
        $underCardThree.removeClass('js-nameholder-on');

    });
});

$navBtn.on('click', function () {
  $menu.toggleClass('js-menu-open');
});

if(sessionStorage.getItem('active')){
  $box.toggleClass('js-box-show-hide');
  $hOne.removeClass('none');
}

$thumbs.on('click', 'a', function(e) {
  e.preventDefault();

  var big = $(this).attr('href');
  $lbImg.attr('src', big);
  $lb.attr('data-state', 'visible');
  console.log('.lightbox');
});

$btnClose.on('click', function () {
  $lb.attr('data-state', 'hidden');
});

$('.top-nav').localScroll();
$('.nav').localScroll();
$('.midnav').localScroll();

var $bitme = $('.bitme')
var $banner = $('.me')

$banner.waypoint(function (direction) {
  if (direction == 'down') {
    $banner.removeClass('bitme');
  } else {
    $banner.addClass('bitme');
  }
});
