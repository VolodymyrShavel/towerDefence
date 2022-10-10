class Enemy extends Sprite {
   constructor({position = {x: 0, y: 0}, health = 100}) {
      super({
         position,
         health,
         imageSrc: './img/orc.png',
         frames: {max: 7},
      });
      this.position = position;
      this.width = 100;
      this.height = 100;
      this.waypointIndex = 0;
      this.center = {
         x: this.position.x + this.width / 2,
         y: this.position.y + this.height / 2,
      };
      this.radius = 50;
      this.healthLine = this.health;
      this.velocity = {
         x: 0,
         y: 0,
      };
   }

   draw() {
      super.draw();
      super.update();

      // Health bar
      c.fillStyle = 'red';
      c.fillRect(this.position.x, this.position.y - 15, this.width - 2, 10);
      c.fillStyle = 'green';
      c.fillRect(
         this.position.x,
         this.position.y - 15,
         (this.health * this.width) / this.healthLine - 2,
         10
      );

      c.font = '18px';
      c.fillStyle = 'white';
      c.fillText(this.health, this.position.x + 42.5, this.position.y - 6.5);
   }

   update() {
      this.draw();

      const waypoint = waypoints[this.waypointIndex];
      const yDistance = waypoint.y - this.center.y;
      const xDistance = waypoint.x - this.center.x;
      const angle = Math.atan2(yDistance, xDistance);

      const speed = 2;

      this.velocity.x = Math.cos(angle) * speed;
      this.velocity.y = Math.sin(angle) * speed;

      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      this.center = {
         x: this.position.x + this.width / 2,
         y: this.position.y + this.height / 2,
      };

      if (
         Math.abs(Math.round(this.center.x) - Math.round(waypoint.x)) <
            Math.abs(this.velocity.x) &&
         Math.abs(Math.round(this.center.y) - Math.round(waypoint.y)) <
            Math.abs(this.velocity.y) &&
         this.waypointIndex < waypoints.length - 1
      ) {
         this.waypointIndex++;
      }
   }
}
