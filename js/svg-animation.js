var $bitme = $('.bitme')
var $head = $('.head')

$head.waypoint(function (direction) {
  if (direction == 'down') {
    $head.removeClass('headlook');
  } else {
    $head.addClass('headlook');
  }
}, {offset: '10%'});
