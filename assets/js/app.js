var isDown = false;
var totalTurns = 0;

$(document).ready(function() {
  $('#red-block').draggable(
    {
      containment:'parent',
      cursor:'none',
      axis: 'x'
    });
});
