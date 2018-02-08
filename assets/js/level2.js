$(document).ready(function() {
  var redBlock = new block(100,200,0,200,'red');
  var orangeHorzOne = new block(100,300,0,0,'orange');
  var orangeHorzTwo = new block(100,300,0,500,'orange');
  var orangeHorzThree = new block(100,200,400,300,'orange');
  var orangeVertOne = new block(300,100,200,100,'orange');
  var orangeVertTwo = new block(200,100,0,300,'orange');
  var orangeVertThree = new block(200,100,500,0,'orange');
  var orangeVertFour = new block(200,100,400,400,'orange');
  createBlock(redBlock);
  createBlock(orangeHorzOne);
  createBlock(orangeHorzTwo);
  createBlock(orangeHorzThree);
  createBlock(orangeVertOne);
  createBlock(orangeVertTwo);
  createBlock(orangeVertThree);
  createBlock(orangeVertFour);

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
    "min-height": block.height + "px",
    "min-width": block.length + "px",
    "left": block.posX,
    "top": block.posY,
    "background": block.color,
    "border": "2px solid #555",
    "box-sizing" : "border-box"
  }).addClass('block'+' '+block.direction);
  $('.gcBody').append(newEl);
}
