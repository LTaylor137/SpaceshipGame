function Freighter(x, y) {
  this.x = x;
  this.y = y;
  this.acceleration = 0.05;
  this.xSpeed = 0;
  this.ySpeed = 0;
  this.friction = 0.95;
  this.maxSpeed = 5;
  this.angle = 0;
  this.maxAngle = 0.2;
  this.width = 30;
  this.height = 30;
  this.active = true;
  this.count = 0;
  this.shieldValue = 3;
  this.shieldMaxValue = 4;
  this.shieldCounter = 0;
  this.shieldColour = "lightblue";

  this.random = function (min, max) {
    return Math.random() * (max - min) + min;
  };

  //create freighter ship tiles
  this.freighterShipConstructArray = [
    //top row 0
    {
      xoffset: this.width / -2 -30,
      yoffset: this.height / -2 - 60,
      xpos: this.x,
      ypos: this.y,
      tile: "wing-left",
      damage: 0,
      maxDamage: 4,
      neighborTiles: [3],
      smokeParticles: [],
      fireParticles: [],
    },
    {
      xoffset: this.width / -2,
      yoffset: this.height / -2 -60,
      xpos: this.x + this.width / -2,
      ypos: this.y + this.height / -2 + 30,
      tile: "body",
      damage: 0,
      maxDamage: 4,
      neighborTiles: [0, 2, 4],
      smokeParticles: [],
      fireParticles: [],
    },
    //4
    {
      xoffset: this.width / -2 + 30,
      yoffset: this.height / -2 -60,
      xpos: this.x + this.width / -2 + 30,
      ypos: this.y + this.height / -2 + 30,
      tile: "wing-right",
      damage: 0,
      maxDamage: 4,
      neighborTiles: [3],
      smokeParticles: [],
      fireParticles: [],
    },
    // row 2
    {
      xoffset: this.width / -2 - 30,
      yoffset: this.height / -2-30,
      xpos: this.x + this.width / -2 - 30,
      ypos: this.y + this.height / -2 + 30,
      tile: "body",
      damage: 0,
      maxDamage: 4,
      neighborTiles: [3],
      smokeParticles: [],
      fireParticles: [],
    },
    //3
    {
      xoffset: this.width / -2,
      yoffset: this.height / -2 -30,
      xpos: this.x + this.width / -2,
      ypos: this.y + this.height / -2 + 30,
      tile: "body",
      damage: 0,
      maxDamage: 4,
      neighborTiles: [0, 2, 4],
      smokeParticles: [],
      fireParticles: [],
    },
    //4
    {
      xoffset: this.width / -2 + 30,
      yoffset: this.height / -2-30,
      xpos: this.x + this.width / -2 + 30,
      ypos: this.y + this.height / -2 + 30,
      tile: "body",
      damage: 0,
      maxDamage: 4,
      neighborTiles: [3],
      smokeParticles: [],
      fireParticles: [],
    },
    //middle row 1
    //
    {
      xoffset: this.width / -2 - 30,
      yoffset: this.height / -2,
      xpos: this.x + this.width / -2 - 30,
      ypos: this.y + this.height / -2 + 30,
      tile: "body",
      damage: 0,
      maxDamage: 4,
      neighborTiles: [3],
      smokeParticles: [],
      fireParticles: [],
    },
    //3
    {
      xoffset: this.width / -2,
      yoffset: this.height / -2,
      xpos: this.x + this.width / -2,
      ypos: this.y + this.height / -2 + 30,
      tile: "body",
      damage: 0,
      maxDamage: 4,
      neighborTiles: [0, 2, 4],
      smokeParticles: [],
      fireParticles: [],
    },
    //4
    {
      xoffset: this.width / -2 + 30,
      yoffset: this.height / -2,
      xpos: this.x + this.width / -2 + 30,
      ypos: this.y + this.height / -2 + 30,
      tile: "body",
      damage: 0,
      maxDamage: 4,
      neighborTiles: [3],
      smokeParticles: [],
      fireParticles: [],
    },
    //bottom row 6
    {
      xoffset: this.width / -2 -60,
      yoffset: this.height / -2+30,
      xpos: this.x + this.width / -2 - 30,
      ypos: this.y + this.height / -2 + 30,
      tile: "bot-left-indent",
      damage: 0,
      maxDamage: 4,
      neighborTiles: [3],
      smokeParticles: [],
      fireParticles: [],
    },
    {
      xoffset: this.width / -2 - 30,
      yoffset: this.height / -2+30,
      xpos: this.x + this.width / -2 - 30,
      ypos: this.y + this.height / -2 + 30,
      tile: "body",
      damage: 0,
      maxDamage: 4,
      neighborTiles: [3],
      smokeParticles: [],
      fireParticles: [],
    },
    //3
    {
      xoffset: this.width / -2,
      yoffset: this.height / -2+30,
      xpos: this.x + this.width / -2,
      ypos: this.y + this.height / -2 + 30,
      tile: "body",
      damage: 0,
      maxDamage: 4,
      neighborTiles: [0, 2, 4],
      smokeParticles: [],
      fireParticles: [],
    },
    //4
    {
      xoffset: this.width / -2 + 30,
      yoffset: this.height / -2 +30,
      xpos: this.x + this.width / -2 + 30,
      ypos: this.y + this.height / -2 + 30,
      tile: "body",
      damage: 0,
      maxDamage: 4,
      neighborTiles: [3],
      smokeParticles: [],
      fireParticles: [],
    },
    {
      xoffset: this.width / -2 +60,
      yoffset: this.height / -2+30,
      xpos: this.x + this.width / -2 - 30,
      ypos: this.y + this.height / -2 + 30,
      tile: "bot-right-indent",
      damage: 0,
      maxDamage: 4,
      neighborTiles: [3],
      smokeParticles: [],
      fireParticles: [],
    },
    //row5
    {
      xoffset: this.width / -2 - 60,
      yoffset: this.height / -2+60,
      xpos: this.x + this.width / -2 - 30,
      ypos: this.y + this.height / -2 + 30,
      tile: "bot-left",
      damage: 0,
      maxDamage: 4,
      neighborTiles: [3],
      smokeParticles: [],
      fireParticles: [],
    },
    {
      xoffset: this.width / -2 - 30,
      yoffset: this.height / -2+60,
      xpos: this.x + this.width / -2 - 30,
      ypos: this.y + this.height / -2 + 30,
      tile: "body",
      damage: 0,
      maxDamage: 4,
      neighborTiles: [3],
      smokeParticles: [],
      fireParticles: [],
    },
    //3
    {
      xoffset: this.width / -2,
      yoffset: this.height / -2+60,
      xpos: this.x + this.width / -2,
      ypos: this.y + this.height / -2 + 30,
      tile: "body-indent-bottom",
      damage: 0,
      maxDamage: 4,
      neighborTiles: [0, 2, 4],
      smokeParticles: [],
      fireParticles: [],
    },
    //4
    {
      xoffset: this.width / -2 + 30,
      yoffset: this.height / -2 +60,
      xpos: this.x + this.width / -2 + 30,
      ypos: this.y + this.height / -2 + 30,
      tile: "body",
      damage: 0,
      maxDamage: 4,
      neighborTiles: [3],
      smokeParticles: [],
      fireParticles: [],
    },
    {
      xoffset: this.width / -2 + 60,
      yoffset: this.height / -2+60,
      xpos: this.x + this.width / -2 - 30,
      ypos: this.y + this.height / -2 + 30,
      tile: "bot-right",
      damage: 0,
      maxDamage: 4,
      neighborTiles: [3],
      smokeParticles: [],
      fireParticles: [],
    },
    //booster row
    {
      xoffset: this.width / -2 -30,
      yoffset: this.height / -2 + 90,
      tile: "booster",
      damage: null,
      maxDamage: null,
      smokeParticles: [],
      fireParticles: [],
    },
    {
      xoffset: this.width / -2 +30,
      yoffset: this.height / -2 + 90,
      tile: "booster",
      damage: null,
      maxDamage: null,
      smokeParticles: [],
      fireParticles: [],
    },
  ];

  for (var i = 0; i < this.freighterShipConstructArray.length; i++) {
    freighterShipTiles.push(this.freighterShipConstructArray[i]);
  }

  //update freighter position
  this.update = function () {
    if (this.active) {
      //horizontal speed
      if ((!leftKey && !rightKey) || (leftKey && rightKey)) {
        //slow down
        this.xSpeed *= this.friction;
        this.angle *= this.friction;
      } else if (leftKey) {
        //move right
        if (this.xSpeed >= -this.maxSpeed) {
          this.xSpeed -= this.acceleration;
        }
        if (this.angle >= -this.maxAngle) {
          this.angle -= (0.5 * Math.PI) / 180;
        }
      } else if (rightKey) {
        //move right
        if (this.xSpeed <= this.maxSpeed) {
          this.xSpeed += this.acceleration;
        }
        if (this.angle <= this.maxAngle) {
          this.angle += (0.5 * Math.PI) / 180;
        }
      }
      //vertical speed
      if ((!upKey && !downKey) || (upKey && downKey)) {
        //slow down
        this.ySpeed *= this.friction;
      } else if (upKey) {
        //move up
        if (this.ySpeed >= -this.maxSpeed) {
          this.ySpeed -= this.acceleration;
        }
      } else if (downKey) {
        //move down
        if (this.ySpeed <= +this.maxSpeed) {
          this.ySpeed += this.acceleration;
        }
      }

      //move ship horizontal
      if (
        (this.x <= 80 && this.xSpeed > 0) ||
        (this.x >= 640 && this.xSpeed < 0) ||
        (this.x >= 80 && this.x <= 640)
      ) {
        this.x += this.xSpeed;
      }

      if (
        (this.y <= 80 && this.ySpeed > 0) ||
        (this.y >= 640 && this.ySpeed < 0) ||
        (this.y >= 80 && this.y <= 640)
      ) {
        this.y += this.ySpeed;
      }

      // update variable values for html dom
      document.getElementById("printAngle").innerHTML = this.angle;
      document.getElementById("printySpeed").innerHTML = this.ySpeed;
      document.getElementById("printxSpeed").innerHTML = this.xSpeed;
      document.getElementById("printxpos").innerHTML = this.x;
      document.getElementById("printypos").innerHTML = this.y;
      // console.log(this.xSpeed);

      //gain shield
      this.shieldCounter = this.shieldCounter + 1;
      if (this.shieldCounter > 100) {
        //set time to next shield
        this.shieldCounter = 0;
        if (this.shieldValue < this.shieldMaxValue) {
          this.shieldValue++;
        }
      }

      // create particles
      freighterShipTiles.forEach((tile) => {
        this.damage = tile.damage;
        //create smoke smoke particles
        while (tile.smokeParticles.length < this.damage * 10) {
          switch (this.damage) {
            case 1:
              this.smokeColour = this.random(190, 200);
              this.smokeLife = 80;
              break;
            case 2:
              this.smokeColour = this.random(160, 170);
              this.smokeLife = 50;
              break;
            case 3:
              this.smokeColour = this.random(100, 130);
              this.smokeLife = 30;
              break;
            case 4:
              this.smokeColour = this.random(50, 80);
              this.smokeLife = 10;
              break;
            default:
              this.smokeColour = this.random(20, 50);
              this.smokeLife = 70;
              break;
          }
          const smokeParticle = {
            x: tile.xpos + this.random(-10, 5),
            y: tile.ypos + this.random(-10, 5),
            xvel: this.random(-0.1, 0.1),
            yvel: this.random(0, 0.1),
            size: this.random(5, 13),
            colour: `rgb(${this.smokeColour}, ${this.smokeColour}, ${this.smokeColour})`,
            life: this.random(this.smokeLife, 100),
          };
          tile.smokeParticles.push(smokeParticle);
        }
        // //create fire Particles
        while (tile.fireParticles.length < this.damage * this.damage) {
          const fireParticle = {
            x: tile.xpos + this.random(-10, 10),
            y: tile.ypos + this.random(-10, 10),
            xvel: this.random(-0.1, 0.1),
            yvel: this.random(0, 1),
            size: this.random(3, 7),
            colour: `rgb(${this.random(230, 255)}, ${this.random(
              100,
              230
            )}, 50)`,
            life: this.random(this.smokeLife, 100),
          };
          tile.fireParticles.push(fireParticle);
        }
      });
    }

    bullets.forEach((bullet, index) => {
      bullet.update();
      if (
        bullet.x < 0 ||
        bullet.x > canvas.width ||
        bullet.y < 0 ||
        bullet.y > canvas.height
      ) {
        bullets.splice(index, 1); // Remove bullet if it goes out of bounds
      }
    });
  };

  // turret variables
  // let turretX = this.x;
  // let turretY = this.y;
 // let angle = 0;
  

  // Bullet class
  // class Bullet {
  //   constructor(x, y, angle) {
  //     this.xpos = x;
  //     this.ypos = y;
  //     this.angle = angle;
  //     this.speed = 10;
  //     this.damage = 1;
  //   }

  //   update() {
  //     this.xpos += Math.cos(this.angle) * this.speed;
  //     this.ypos += Math.sin(this.angle) * this.speed;
  //   }

  // }

  // canvas.addEventListener("mousedown", () => {
  //   bullets.push(new Bullet(this.x, this.y, angle));
  //   console.log(angle);
  // });

  // //detect mouse pos
  // canvas.addEventListener("mousemove", (e) => {
  //   mouseX = e.clientX - canvas.offsetLeft;
  //   mouseY = e.clientY - canvas.offsetTop;
  //   angle = Math.atan2(mouseY - this.y, mouseX - this.x);
  // });

  // draw
  this.draw = function () {
    //draw freighter ship
    freighterShipTiles.forEach((element) => {
      context.save();
      context.fillStyle = "darkgrey";
      context.translate(this.x, this.y);
      // this updates the position of each tile by adding its individual offset
      element.xpos = this.x + element.xoffset + this.width / 2;
      element.ypos = this.y + element.yoffset + this.height / 2;
    //  context.rotate(this.angle);

      //draw tiles
      shiptilegraphics.draw(element.tile, element.xoffset, element.yoffset);

      //engine booster up down
      if (element.tile === "booster") {
        // if (downKey === true) {
        //   shiptilegraphics.drawbooster(
        //     element.tileType,
        //     element.xoffset,
        //     element.yoffset,
        //     "downKey"
        //   );
        // } else if (upKey === true) {
        //   shiptilegraphics.drawbooster(
        //     element.tileType,
        //     element.xoffset,
        //     element.yoffset,
        //     "upKey"
        //   );
        // } else {
          
          shiptilegraphics.drawbooster(
            element.tileType,
            element.xoffset,
            element.yoffset,
            "noKey"
          );
        // }
      }
      //booster right
      // if (element.tile === "booster-right") {
      //   if (leftKey === true) {
      //     shiptilegraphics.drawbooster(
      //       element.tileType,
      //       element.xoffset,
      //       element.yoffset,
      //       "leftKey"
      //     );
      //   }
      // }
      // //booster left
      // if (element.tile === "booster-left") {
      //   if (rightKey === true) {
      //     shiptilegraphics.drawbooster(
      //       element.tileType,
      //       element.xoffset,
      //       element.yoffset,
      //       "rightKey"
      //     );
      //   }
      // }

      context.restore();
    });

    //draw bullets
    // bullets.forEach((bullet) => {
    //   context.fillStyle = "red";
    //   // context.save();
    //   context.beginPath();
    //   context.arc(bullet.xpos, bullet.ypos, 5, 0, Math.PI * 2);
    //   context.fill();
    //   context.restore();
    // });

    

    // drawTurret
  //   context.save();
  //   context.translate(this.x, this.y);
  //  // context.rotate(angle);
  //   context.fillStyle = "#666";
  //   context.fillRect(0, -3.5, 20, 7);
  //   context.restore();
  //   context.save();
  //   context.translate(this.x, this.y);
  //   context.fillStyle = "#666";
  //   context.beginPath();
  //   context.arc(0, 0, 10, 0, Math.PI * 2);
  //   context.fill();
  //   context.restore();

    //draw shield
    // if (this.shieldValue >= 1) {
    //   context.strokeStyle = this.shieldColour;
    //   context.beginPath();
    //   context.globalAlpha = 0.7;
    //   context.lineWidth = 2;
    //   context.arc(this.x, this.y, 54, 0, 2 * Math.PI);
    //   context.closePath();
    //   context.stroke();
    //   context.globalAlpha = 0.25;
    //   context.beginPath();
    //   context.lineWidth = 5;
    //   context.arc(this.x, this.y, 51, 0, 2 * Math.PI);
    //   context.closePath();
    //   context.stroke();
    //   context.globalAlpha = 1;
    // }
    // if (this.shieldValue >= 2) {
    //   context.strokeStyle = this.shieldColour;
    //   context.globalAlpha = 0.4;
    //   context.beginPath();
    //   context.lineWidth = 10;
    //   context.arc(this.x, this.y, 50, 0, 2 * Math.PI);
    //   context.closePath();
    //   context.stroke();
    //   context.globalAlpha = 0.2;
    //   context.beginPath();
    //   context.lineWidth = 4;
    //   context.arc(this.x, this.y, 43, 0, 2 * Math.PI);
    //   context.closePath();
    //   context.stroke();
    //   context.globalAlpha = 1;
    // }
    // if (this.shieldValue === 3) {
    //   context.beginPath();
    //   context.globalAlpha = 0.3;
    //   context.fillStyle = this.shieldColour;
    //   context.arc(this.x, this.y, 55, 0, 2 * Math.PI);
    //   context.fill();
    //   context.globalAlpha = 1;
    // }
    // if (this.shieldValue === 4) {
    //   context.beginPath();
    //   context.globalAlpha = 0.3;
    //   context.fillStyle = "yellow";
    //   context.arc(this.x, this.y, 55, 0, 2 * Math.PI);
    //   context.fill();
    //   context.globalAlpha = 1;
    // }

    // draw particles
    freighterShipTiles.forEach((tile) => {
      this.damage = tile.damage;
      //draw smokeParticles
      for (let i = 0; i < tile.smokeParticles.length; i += 1) {
        p = tile.smokeParticles[i];
        if (this.x <= 80 || this.x >= 640) {
          p.x = p.x + tile.xoffset / tile.xpos - this.xSpeed;
        } else {
          p.x = p.x + tile.xoffset / tile.xpos - this.xSpeed / 2;
        }
        if (this.y >= 640) {
          p.y = p.y + tile.yoffset / tile.ypos + 2 + this.ySpeed / 4;
        } else if (this.y <= 80) {
          p.y = p.y + tile.yoffset / tile.ypos + 2 - this.ySpeed / 2;
        } else {
          p.y = p.y + tile.yoffset / tile.ypos + 2 - this.ySpeed / 4;
        }
        p.life = p.life + 1;
        context.fillStyle = p.colour;
        context.fillRect(p.x, p.y, p.size, p.size);
        if (p.life >= 100) {
          tile.smokeParticles.shift(p);
        }
      }
      //draw fireParticles
      for (let i = 0; i < tile.fireParticles.length; i += 1) {
        p = tile.fireParticles[i];
        p.x = p.x + tile.xoffset / tile.xpos - this.xSpeed / 2;
        p.y = p.y + tile.yoffset / tile.ypos + 1;
        p.life = p.life + 1;
        context.fillStyle = p.colour;
        context.fillRect(p.x, p.y, p.size, p.size);
        if (p.life >= 100) {
          tile.fireParticles.shift(p);
        }
      }
    });

    //DEV INFO
    if (showDevInfo == true) {
      //draw centre pivot point of ship
      context.fillStyle = "red";
      context.fillRect(this.x - 2, this.y - 2, 4, 4);
      //draw damage value
      this.array.forEach((element) => {
        if (element.damage !== null) {
          context.save();
          context.translate(this.x, this.y);
       //   context.rotate(this.angle);
          context.fillStyle = "magenta";
          context.fillText(
            element.damage,
            element.xoffset + 12,
            element.yoffset + 17
          );
          context.restore();
        }
      });
    }
  };

  // freighter take damage
  this.takeDamage = function (location, aDamage) {
    this.shieldCounter = 0;
    if (this.shieldValue >= 1) {
      //console.log("shield hit!");
      this.shieldValue = this.shieldValue - 1;
      this.shieldColour = "red";
      setTimeout(() => {
        this.shieldColour = "lightblue";
      }, 100);
      setTimeout(() => {
        this.shieldColour = "red";
      }, 300);
      setTimeout(() => {
        this.shieldColour = "lightblue";
      }, 400);
      setTimeout(() => {
        this.shieldColour = "red";
      }, 600);
      setTimeout(() => {
        this.shieldColour = "lightblue";
      }, 700);
    } else {
      if (
        freighterShipTiles[location].damage < freighterShipTiles[location].maxDamage
      ) {
        freighterShipTiles[location].damage =
          freighterShipTiles[location].damage + aDamage;
      } else if (
        (freighterShipTiles[location].damage = freighterShipTiles[location].maxDamage)
      ) {
        getRandomNeighborTile = Math.floor(
          Math.random() * freighterShipTiles[location].neighborTiles.length
        );
        neighborTile =
          freighterShipTiles[location].neighborTiles[getRandomNeighborTile];
        if (
          freighterShipTiles[neighborTile].damage <
          freighterShipTiles[neighborTile].maxDamage
        ) {
          freighterShipTiles[neighborTile].damage =
            freighterShipTiles[neighborTile].damage + aDamage;
        }
      }
    }
  };
}
