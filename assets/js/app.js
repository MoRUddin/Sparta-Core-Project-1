$(document).ready(function() {
  var $mdir = $.mousedirection();
  var $block = $('.block');
  var $turnCounter = $('#turnCounter');

  //update mouse direction
  $(".gcBody").bind("mousedirection", function (e) {
      $mdir = e.direction;
      console.log($mdir);
  });

  //make all blocks clickable
  $block.on('mousedown', function() {
    switch ($(this).hasClass('horz')) {//detects whether the blocks should move horizontally or vertically
      case true:
          //$(this).css('left', this.offsetLeft+30);
          $(this).on('mousedirection'){

          }
        break;
      case false:
          console.log('working');
        break;
      default:

    }
  });

});
