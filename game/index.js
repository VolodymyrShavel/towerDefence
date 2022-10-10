const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1280;
canvas.height = 768;
const fullScreenButton = document.getElementById('fullScreenButton');

c.fillStyle = 'white';
c.fillRect(0, 0, canvas.width, canvas.height);

const placementTilesData2D = [];

for (let i = 0; i < placementTilesData.length; i += 20) {
   placementTilesData2D.push(placementTilesData.slice(i, i + 20));
}

const placementTiles = [];

placementTilesData2D.forEach((row, y) => {
   row.forEach((symbol, x) => {
      if (symbol === 14) {
         // add building placement tile here
         placementTiles.push(
            new PlacementTile({
               position: {
                  x: x * 64 + 30,
                  y: y * 64,
               },
            })
         );
      }
   });
});

const img = new Image();

img.onload = () => {
   animate();
};

img.src = 'img/gameMap.png';

function toggleFullScreen() {
   console.log(document.fullScreenElement);
   if (!document.fullscreenElement) {
      canvas.requestFullscreen().catch((err) => {
         alert(`Error, can't enable full-screen mode: ${err.message}`);
      });
   } else {
      document.exitFullscreen();
   }
}
fullScreenButton.addEventListener('click', toggleFullScreen);

const enemies = [];
let wave = 1;
function spawnEnemies(spawnCount) {
   for (let i = 1; i < spawnCount + 1; i++) {
      const xOffset = i * 150;
      let enemyHp = 100;
      let increaseHpValue = 5;
      let increaseHp = enemyHp + increaseHpValue * wave;
      // newEnemy = newEnemy = {health: 50};
      const newEnemy =
         wave == 1
            ? new Enemy({
                 position: {x: waypoints[0].x - xOffset, y: waypoints[0].y},
                 health: enemyHp,
              })
            : new Enemy({
                 position: {x: waypoints[0].x - xOffset, y: waypoints[0].y},
                 health: increaseHp,
              });
      // newEnemy.healthLine += enemyHp;
      // newEnemy.health += enemyHp;
      // console.log(newEnemy.health);
      enemies.push(newEnemy);
   }
}

const buildings = [];
let activeTile = undefined;
let activeBuilding = undefined;
let enemyCount = 3;
let hp = 150;
let hearts = 10;
let coins = 100;
let health = 100;
const explosions = [];
spawnEnemies(enemyCount);

function animate() {
   const animationId = requestAnimationFrame(animate);

   c.drawImage(img, 0, 0);

   for (let i = enemies.length - 1; i >= 0; i--) {
      const enemy = enemies[i];
      enemy.update();

      if (enemy.position.x > canvas.width) {
         hearts -= 1;
         enemies.splice(i, 1);
         document.querySelector('#hearts').innerHTML = hearts;

         console.log(hearts);

         if (hearts === 0) {
            console.log('game over');
            cancelAnimationFrame(animationId);
            document.querySelector('#gameOver').style.display = 'flex';
         }
      }
   }

   for (let i = explosions.length - 1; i >= 0; i--) {
      const explosion = explosions[i];
      explosion.draw();
      explosion.update();

      if (explosion.frames.current >= explosion.frames.max - 1) {
         explosions.splice(i, 1);
      }
   }

   // document.querySelector('#wave').innerHTML = `Wave: ${wave} / 10`;

   // Track total amount of enemies
   // console.log({Enemy});
   if (enemies.length === 0) {
      enemyCount += 2;
      // enemies.nextWave();
      wave += 1;
      document.querySelector('#wave').innerHTML = `Wave: ${wave} / 999`;
      // Enemy.health += hp;
      spawnEnemies(enemyCount);
   }

   placementTiles.forEach((tile) => {
      tile.update(mouse);
   });

   buildings.forEach((building) => {
      building.update();
      building.target = null;
      const validEnemies = enemies.filter((enemy) => {
         const xDifference = enemy.center.x - building.center.x;
         const yDifference = enemy.center.y - building.center.y;
         const distance = Math.hypot(xDifference, yDifference);
         return distance < enemy.radius + building.radius;
      });
      building.target = validEnemies[0];

      for (let i = building.projectiles.length - 1; i >= 0; i--) {
         const projectile = building.projectiles[i];
         projectile.update();

         const xDifference = projectile.enemy.center.x - projectile.position.x;
         const yDifference = projectile.enemy.center.y - projectile.position.y;
         const distance = Math.hypot(xDifference, yDifference);

         // This is when a projectile hits an enemy
         if (distance < projectile.enemy.radius + projectile.radius) {
            // Enemy health and enemy removal

            projectile.enemy.health -= 20;

            if (projectile.enemy.health <= 0) {
               const enemyIndex = enemies.findIndex((enemy) => {
                  return projectile.enemy === enemy;
               });
               if (enemyIndex > -1) {
                  enemies.splice(enemyIndex, 1);
                  coins += Math.floor(Math.random() * 4 + 2);
                  document.querySelector('#coins').innerHTML = coins;
               }
            }

            // console.log(projectile.enemy.health);
            explosions.push(
               new Sprite({
                  position: {
                     x: projectile.position.x,
                     y: projectile.position.y,
                  },
                  imageSrc: './img/explosion.png',
                  frames: {max: 4},
                  offset: {x: 0, y: 0},
               })
            );
            building.projectiles.splice(i, 1);
         }
         // console.log(distance);
      }
   });
}

const mouse = {
   x: undefined,
   y: undefined,
};

canvas.addEventListener('click', (e) => {
   if (activeTile && !activeTile.isOccupied && coins - 50 >= 0) {
      coins -= 50;
      document.querySelector('#coins').innerHTML = coins;
      let newBuilding = new Building({
         position: {x: activeTile.position.x - 27, y: activeTile.position.y},
      });
      buildings.push(newBuilding);
      activeTile.isOccupied = true;
      buildings.sort((a, b) => {
         return a.position.y - b.position.y;
      });
   }
   // c.beginPath();
   // c.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2);
   // c.fillStyle = 'rgba(0, 0, 255, 0.2)';
   // c.fill();
});

window.addEventListener('mousemove', (e) => {
   mouse.x = e.clientX;
   mouse.y = e.clientY;

   activeTile = null;
   for (let i = 0; i < placementTiles.length; i++) {
      const tile = placementTiles[i];
      if (
         mouse.x > tile.position.x &&
         mouse.x < tile.position.x + tile.size &&
         mouse.y > tile.position.y &&
         mouse.y < tile.position.y + tile.size
      ) {
         activeTile = tile;
      }
   }

   // activeTile = tile
});

buildings.forEach((building) => {
   if (
      mouse.x > building.position.x &&
      mouse.x < building.position.x + building.width &&
      mouse.y > building.position.y &&
      mouse.y < building.position.y + building.height
   ) {
      console.log('Hello');
   }
   // drawCircle();
});
