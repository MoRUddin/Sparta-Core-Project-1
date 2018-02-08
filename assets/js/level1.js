$(document).ready(function() {
  var redBlock = new block(100, 200, 0, 200, 'red');
  var orange1 = new block(100, 300, 0, 0, 'orange');
  var orange2 = new block(100, 300, 0, 500, 'orange');
  var orange3 = new block(100, 200, 400, 300, 'orange');
  var orange4 = new block(300, 100, 200, 100, 'orange');
  var orange5 = new block(200, 100, 0, 300, 'orange');
  var orange6 = new block(200, 100, 500, 0, 'orange');
  var orange7 = new block(200, 100, 400, 400, 'orange');
  createBlock(redBlock);
  createBlock(orange1);
  createBlock(orange2);
  createBlock(orange3);
  createBlock(orange4);
  createBlock(orange5);
  createBlock(orange6);
  createBlock(orange7);

});

var height;
var length;
var direction;
var posX;
var posY;
var color;
var $gcBody = $('.gcBody');

var block = function(height, length, posX, posY, color) {
  this.height = height;
  this.length = length;
  this.direction = (this.length > this.height ? "horz" : "vert");
  this.posX = posX;
  this.posY = posY;
  this.color = color;
}

function createBlock(block) {
  var newEl = $('<div></div>').css({
    "position": "absolute",
    "height": block.height + "px",
    "width": block.length + "px",
    "left": block.posX,
    "top": block.posY,
    "background": block.color,
    "border": "2px solid #555",
    "box-sizing": "border-box"
  }).addClass('block' + ' ' + block.direction);
  $('.gcBody').append(newEl);
}
