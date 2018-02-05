var isDown = false;

$(document).ready(function() {
  $('#red-block').draggable(
    {
      containment:'parent',
      cursor:'crosshair'
    });
});
