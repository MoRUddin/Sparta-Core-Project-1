$(document).ready(function() {
  var isDown = false;
  var totalTurns = 0;
  var $turnCounter = $('#turnCounter');

  $('.goal').offset({top:28,left:609});
  $('.orangeBlockVertical').offset({top:28,left:309});

  $('#redBlock').draggable(
    {
      containment:'parent',
      axis: 'x',
      grid: [150,150],
      drag: function(){
        if(collisionDetect()){
          console.log('collision');
          $("#redBlock").draggable( "option", "grid",[0,0]);
        } else {
          console.log('no collision');
        }
      },
      stop: function() {
        turnIncrement();
        if(this.offsetLeft==602&&this.offsetTop==2) {
          alert('winRaR');
        }
      }
  });
  var $orangeBlockVertical = $('.orangeBlockVertical');
  $orangeBlockVertical.draggable(
    {
      containment:'parent',
      axis: 'y',
      grid: [150,150],
      drag: function(){
        if(collisionDetect()){
          $(".selector").draggable("option", "grid",[0,0]);
        } else {
          console.log('no collision');
        }
      },
      stop: turnIncrement
  });
  var $orangeBlockHorizontal = $('.orangeBlockHorizontal');
  $orangeBlockHorizontal.draggable(
    {
      containment:'parent',
      axis: 'x',
      grid: [150,150],
      drag: function(){
        if(collisionDetect()){
          $(".selector").draggable( "option", "grid",[0,0]);
        } else {
          console.log('no collision');
        }
      },
      stop: turnIncrement
  });

  function turnIncrement(){
    totalTurns++;
    $turnCounter.html('Turns: '+totalTurns);
  }
  function collisionDetect(){
    if(topRightCollision()||bottomRightCollision()||bottomLeftCollision()||topLeftCollision()){
      return true;
    } else {
      return false;
    }
  }
  function topRightCollision() {
    return false;
  }
  function bottomRightCollision() {
    return false;
  }
  function bottomLeftCollision() {
    return false;
  }
  function topLeftCollision() {
    return false;
  }

});
