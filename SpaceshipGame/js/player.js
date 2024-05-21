function Player(x, y) {
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
  this.shieldValue = 0;
  this.shieldMaxValue = 2;
  this.shieldCounter = 0;

  // this.smokeParticles = [];
  // this.fireParticles = [];

  this.random = function (min, max) {
    return Math.random() * (max - min) + min;
  };

  this.array = [
    //top row
    {
      xoffset: this.width / -2,
      yoffset: this.height / -2 - 30,
      xpos: this.x,
      ypos: this.y,
      tile: "nose",
      damage: 0,
      maxDamage: 4,
      smokeParticles: [],
      fireParticles: [],
    },
    //middle row
    {
      xoffset: this.width / -2 - 60,
      yoffset: this.height / -2,
      tile: "booster-left",
      damage: null,
      maxDamage: null,
      smokeParticles: [],
      fireParticles: [],
    },
    {
      xoffset: this.width / -2 - 30,
      yoffset: this.height / -2,
      xpos: this.x + this.width / -2 - 30,
      ypos: this.y + this.height / -2 + 30,
      tile: "wing-left",
      damage: 0,
      maxDamage: 4,
      smokeParticles: [],
      fireParticles: [],
    },
    {
      xoffset: this.width / -2,
      yoffset: this.height / -2,
      xpos: this.x + this.width / -2,
      ypos: this.y + this.height / -2 + 30,
      tile: "body",
      damage: 0,
      maxDamage: 4,
      smokeParticles: [],
      fireParticles: [],
    },
    {
      xoffset: this.width / -2 + 30,
      yoffset: this.height / -2,
      xpos: this.x + this.width / -2 + 30,
      ypos: this.y + this.height / -2 + 30,
      tile: "wing-right",
      damage: 0,
      maxDamage: 4,
      smokeParticles: [],
      fireParticles: [],
    },
    {
      xoffset: this.width / -2 + 60,
      yoffset: this.height / -2,
      tile: "booster-right",
      damage: null,
      maxDamage: null,
      smokeParticles: [],
      fireParticles: [],
    },
    //bottom row
    {
      xoffset: this.width / -2,
      yoffset: this.height / -2 + 30,
      tile: "booster",
      damage: null,
      maxDamage: null,
      smokeParticles: [],
      fireParticles: [],
    },
  ];

  for (var i = 0; i < this.array.length; i++) {
    shipTiles.push(this.array[i]);
  }

  //movement
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
      shipTiles.forEach((tile) => {
        this.damage = tile.damage;
        //create smoke smoke particles
        while (tile.smokeParticles.length < this.damage * 10) {
          switch (this.damage) {
            case 1:
              this.smokeColour = this.random(190, 200);
              break;
            case 2:
              this.smokeColour = this.random(160, 170);
              break;
            case 3:
              this.smokeColour = this.random(100, 130);
              break;
            case 4:
              this.smokeColour = this.random(50, 80);
              break;
            default:
              this.smokeColour = this.random(20, 50);
              break;
          }
          const smokeParticle = {
            x: tile.xpos + this.random(-10, 5),
            y: tile.ypos + this.random(-10, 5),
            xvel: this.random(-0.1, 0.1),
            yvel: this.random(0, 0.1),
            size: this.random(5, 13),
            colour: `rgb(${this.smokeColour}, ${this.smokeColour}, ${this.smokeColour})`,
            life: this.random(20, 100),
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
            life: this.random(20, 100),
          };
          tile.fireParticles.push(fireParticle);
        }
      });
    }
  };

  // draw the player position
  this.draw = function () {
    this.array.forEach((element) => {
      context.save();
      context.fillStyle = "grey";
      context.translate(this.x, this.y);
      // this updates the position of for each tile by adding its individual offset
      element.xpos = this.x + element.xoffset + this.width / 2;
      element.ypos = this.y + element.yoffset + this.height / 2;
      context.rotate(this.angle);
      shiptileset.draw(element.tile, element.xoffset, element.yoffset);

      //engine booster up down
      if (element.tile == "booster") {
        if (downKey == true) {
          shiptileset.drawbooster(
            element.tile,
            element.xoffset,
            element.yoffset,
            "downKey"
          );
        } else if (upKey == true) {
          shiptileset.drawbooster(
            element.tile,
            element.xoffset,
            element.yoffset,
            "upKey"
          );
        } else {
          shiptileset.drawbooster(
            element.tile,
            element.xoffset,
            element.yoffset,
            "noKey"
          );
        }
      }
      //booster right
      if (element.tile == "booster-right") {
        if (leftKey == true) {
          shiptileset.drawbooster(
            element.tile,
            element.xoffset,
            element.yoffset,
            "leftKey"
          );
        }
      }
      //booster left
      if (element.tile == "booster-left") {
        if (rightKey == true) {
          shiptileset.drawbooster(
            element.tile,
            element.xoffset,
            element.yoffset,
            "rightKey"
          );
        }
      }

      context.restore();
    });

    //draw shield
    if (this.shieldValue >= 1) {
      context.strokeStyle = "lightblue";
      context.beginPath();
      context.globalAlpha = 0.7;
      context.lineWidth = 2;
      context.arc(this.x, this.y, 54, 0, 2 * Math.PI);
      context.closePath();
      context.stroke();
      context.strokeStyle = "lightblue";
      context.globalAlpha = 0.25;
      context.beginPath();
      context.lineWidth = 5;
      context.arc(this.x, this.y, 51, 0, 2 * Math.PI);
      context.closePath();
      context.stroke();
      context.globalAlpha = 1;
    }
    if (this.shieldValue >= 2) {
      context.strokeStyle = "lightblue";
      context.globalAlpha = 0.4;
      context.beginPath();
      context.lineWidth = 10;
      context.arc(this.x, this.y, 50, 0, 2 * Math.PI);
      context.closePath();
      context.stroke();
      context.strokeStyle = "lightblue";
      context.globalAlpha = 0.2;
      context.beginPath();
      context.lineWidth = 4;
      context.arc(this.x, this.y, 43, 0, 2 * Math.PI);
      context.closePath();
      context.stroke();
      context.globalAlpha = 1;
    }
    if (this.shieldValue === 3) {
      context.beginPath();
      context.globalAlpha = 0.3;
      context.fillStyle = "lightblue";
      context.arc(this.x, this.y, 55, 0, 2 * Math.PI);
      context.fill();
      context.globalAlpha = 1;
    }
    if (this.shieldValue === 4) {
      context.beginPath();
      context.globalAlpha = 0.3;
      context.fillStyle = "yellow";
      context.arc(this.x, this.y, 55, 0, 2 * Math.PI);
      context.fill();
      context.globalAlpha = 1;
    }

    // draw particles
    shipTiles.forEach((tile) => {
      this.damage = tile.damage;
      //draw smokeParticles
      for (let i = 0; i < tile.smokeParticles.length; i += 1) {
        p = tile.smokeParticles[i];
        p.x = p.x + tile.xoffset / tile.xpos;
        p.y = p.y + tile.yoffset / tile.ypos;
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
        p.x = p.x + tile.xoffset / tile.xpos;
        p.y = p.y + tile.yoffset / tile.ypos;
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
          context.rotate(this.angle);
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

  // player take damage
  this.takeDamage = function (location, aDamage) {
    this.shieldCounter = 0;
    if (this.shieldValue >= 1) {
      //console.log("shield hit!");
      this.shieldValue = this.shieldValue - 1;
    } else {
      if (this.array[location].damage < this.array[location].maxDamage) {
        this.array[location].damage = this.array[location].damage + aDamage;
      }
    }
  };
}
