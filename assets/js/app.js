$(document).ready(function() {
  var $mdir = $.mousedirection();
  var $block = $('.block');
  var $turnCounter = $('#turnCounter');
  var totalTurns = 0;
  var noCollision = true;

  //update mouse direction
  $(".gcBody").bind("mousedirection", function(e) {
    $mdir = e.direction;
  });

  //make all blocks clickable
  $block.on('mousedown', function() {
    switch ($(this).hasClass('horz')) { //detects whether the blocks should move horizontally or vertically
      case true:

        $(this).on('mousedirection', function(event) {

          switch (hasCollisionHorz(this)) { //checks for collisions and limits movement within the game container
            case 'bothCollision':
              break;
            case 'leftCollision':
              if ($mdir == 'right' && this.offsetLeft + $(this).outerWidth() < 600) {
                $(this).css('left', this.offsetLeft + 5);
              }
              break;
            case 'rightCollision':
              if ($mdir == 'left' && this.offsetLeft > 0) {
                $(this).css('left', this.offsetLeft - 5);
              }
              break;
            default:
              if ($mdir == 'left' && this.offsetLeft > 0) {
                $(this).css('left', this.offsetLeft - 5);
              } else if ($mdir == 'right' && this.offsetLeft + $(this).outerWidth() < 600) {
                $(this).css('left', this.offsetLeft + 5);
              }
          } //ends horizontal collision detection switch
        }); // closes mousedirection listener
        break;

      case false:

        $(this).on('mousedirection', function(event) {

          switch (hasCollisionVert(this)) { //checks for collisions and limits movement within the game container
            case 'bothCollision':
              break;
            case 'topCollision':
              if ($mdir == 'down' && this.offsetTop + $(this).outerHeight() < 600) {
                $(this).css('top', this.offsetTop + 5);
              }
              break;
            case 'bottomCollision':
              if ($mdir == 'up' && this.offsetTop > 0) {
                $(this).css('top', this.offsetTop - 5);
              }
              break;
            default:
              if ($mdir == 'up' && this.offsetTop > 0) {
                $(this).css('top', this.offsetTop - 5);
              } else if ($mdir == 'down' && this.offsetTop + $(this).outerHeight() < 600) {
                $(this).css('top', this.offsetTop + 5);
              }
          } //ends vertical collision detection switch
        }); // closes mousedirection listener

        break;
      default:

    } //end direction switch
  }); //end block mousedown listener
  $('html').on('mouseup', function() {
    $block.off('mousedirection');
    turnIncrement();
    if ($block[0].offsetLeft == 400) { //win condition
      alert('winner');
    }
  });

  //increments turns taken and updates it to the screen.
  function turnIncrement() {
    totalTurns++;
    $turnCounter.html('Turns: ' + totalTurns);
  }

  function hasCollisionHorz(block) {
    if (leftCollision(block) && rightCollision(block)) {
      return 'bothCollision';
    } else if (leftCollision(block) && !rightCollision(block)) {
      return 'leftCollision';
    } else if (rightCollision(block) && !leftCollision(block)) {
      return 'rightCollision';
    }
  }

  function hasCollisionVert(block) {
    if (topCollision(block) && bottomCollision(block)) {
      return 'bothCollision';
    } else if (topCollision(block)) {
      return 'topCollision';
    } else if (bottomCollision(block)) {
      return 'bottomCollision';
    }
  }
  //checks x coordinates for collision on the block's left side
  function leftCollision(block) {
    for (var i = 0; i < $block.length; i++) {
      if (block === $block[i]) { //skips self
      } else if ((block.offsetLeft == $block[i].offsetLeft + $($block[i]).outerWidth()) && (yHorz(block, $block[i]))) {
        return true;
      }
    }
    if (noCollision) {
      return false;
    }
  }
  //checks x coordinates for collision on the block's right side
  function rightCollision(block) {
    for (var i = 0; i < $block.length; i++) {
      if (block === $block[i]) { //skips self
      } else if ((block.offsetLeft + $(block).outerWidth() == $block[i].offsetLeft) && (yHorz(block, $block[i]))) {
        return true;
      }
    }
    if (noCollision) {
      return false;
    }
  }
  //checks y coordinates for collision on the block's top side
  function topCollision(block) {
    for (var i = 0; i < $block.length; i++) {
      if (block === $block[i]) { //skips self
      } else if ((block.offsetTop == $block[i].offsetTop + $($block[i]).outerHeight()) && (xVert(block, $block[i]))) {
        return true;
      }
    }
    if (noCollision) {
      return false;
    }
  }
  //checks y coordinates for collision on the block's bottom side
  function bottomCollision(block) {
    for (var i = 0; i < $block.length; i++) {
      if (block === $block[i]) { //skips self
      } else if ((block.offsetTop + $(block).outerHeight() == $block[i].offsetTop) && (xVert(block, $block[i]))) {
        return true;
      }
    }
    if (noCollision) {
      return false;
    }
  }
  //checks if the top of the block being moved is between the top and bottom coordinates of the obstacle, then checks if the bottom  of the block being moved is between the top and bottom coordinates of the obstacle
  function yHorz(block, obstacle) {
    if (obstacle.offsetTop < block.offsetTop && block.offsetTop < obstacle.offsetTop + $(obstacle).outerHeight() || obstacle.offsetTop < block.offsetTop + $(block).outerHeight() && block.offsetTop + $(block).outerHeight() < obstacle.offsetTop + $(obstacle).outerHeight()) {
      return true;
    } else if (obstacle.offsetTop == block.offsetTop && block.offsetTop + $(block).outerHeight() == obstacle.offsetTop + $(obstacle).outerHeight()) {
      return true;
    } else {
      return false;
    }
  }

  function xVert(block, obstacle) {
    if (obstacle.offsetLeft < block.offsetLeft && block.offsetLeft < obstacle.offsetLeft + $(obstacle).outerWidth() || obstacle.offsetLeft < block.offsetLeft + $(block).outerWidth() && block.offsetLeft + $(block).outerWidth() < obstacle.offsetLeft + $(obstacle).outerWidth()) {
      return true;
    } else if (obstacle.offsetLeft == block.offsetLeft && block.offsetLeft + $(block).outerWidth() == obstacle.offsetLeft + $(obstacle).outerWidth()) {
      return true;
    } else {
      return false;
    }
  }

});
