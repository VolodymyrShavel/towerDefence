window.onload = function () {
   var canvas = document.getElementById('myCanvas');
   var c = canvas.getContext('2d');

   var tile = new Image();
   tile.src = './img/gameMap.png';

   tile.onload = () => {
      draw();
   };

   function draw() {
      c.clearRect(0, 0, canvas.width, canvas.height);

      for (var row = 0; row < 10; row++) {
         for (var col = 0; col < 10; col++) {
            var tilePositionX = (row - col) * tile.height;

            // Center the grid horizontally
            tilePositionX += canvas.width / 2 - tile.width / 2;

            var tilePositionY = (row + col) * (tile.height / 2);

            c.drawImage(
               tile,
               Math.round(tilePositionX),
               Math.round(tilePositionY),
               tile.width,
               tile.height
            );
         }
      }
   }
};
