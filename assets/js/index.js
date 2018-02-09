$(document).ready(function() {
  var song = new Audio('./assets/music/Umi-no-Mieru-Machi.mp3');
  song.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
  }, false);
  song.play();
});
