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
  this.shieldValue = 0;
  this.shieldMaxValue = 0;
  this.shieldCounter = 0;
  this.shieldColour = "lightblue";

  this.random = function (min, max) {
    return Math.random() * (max - min) + min;
  };

  //create freighter ship tiles
  //----[][][]
  //----[][][]
  //[][][][][][][]
  //--[][][][][]
  //----[]--[]

  this.freighterShipConstructArray = [
    //row 1
    //0
    {
      xoffset: this.width / -2 - 30,
      yoffset: this.height / -2 - 60,
      xpos: this.x + this.width / -2 - 30,
      ypos: this.y + this.height / -2 - 60,
      tile: "top-left",
      damage: 0,
      maxDamage: 4,
      neighborTiles: [1, 4],
      smokeParticles: [],
      fireParticles: [],
    },
    //1
    {
      xoffset: this.width / -2,
      yoffset: this.height / -2 - 60,
      xpos: this.x + this.width / -2,
      ypos: this.y + this.height / -2 - 60,
      tile: "body",
      damage: 0,
      maxDamage: 4,
      neighborTiles: [0, 2, 5],
      smokeParticles: [],
      fireParticles: [],
    },
    //2
    {
      xoffset: this.width / -2 + 30,
      yoffset: this.height / -2 - 60,
      xpos: this.x + this.width / -2 + 30,
      ypos: this.y + this.height / -2 - 60,
      tile: "top-right",
      damage: 0,
      maxDamage: 4,
      neighborTiles: [1, 5],
      smokeParticles: [],
      fireParticles: [],
    },
    // row 2
    //3
    {
      xoffset: this.width / -2 - 60,
      yoffset: this.height / -2 - 30,
      xpos: this.x + this.width / -2 - 60,
      ypos: this.y + this.height / -2 - 30,
      tile: "bot-right-indent",
      damage: null,
      maxDamage: null,
      neighborTiles: [0, 4, 6],
      smokeParticles: [],
      fireParticles: [],
    },
    //4
    {
      xoffset: this.width / -2 - 30,
      yoffset: this.height / -2 - 30,
      xpos: this.x + this.width / -2 - 30,
      ypos: this.y + this.height / -2 - 30,
      tile: "body",
      damage: 0,
      maxDamage: 4,
      neighborTiles: [0, 4, 6],
      smokeParticles: [],
      fireParticles: [],
    },
    //5
    {
      xoffset: this.width / -2,
      yoffset: this.height / -2 - 30,
      xpos: this.x + this.width / -2,
      ypos: this.y + this.height / -2 - 30,
      tile: "body",
      damage: 0,
      maxDamage: 4,
      neighborTiles: [1, 3, 5, 7],
      smokeParticles: [],
      fireParticles: [],
    },
    //6
    {
      xoffset: this.width / -2 + 30,
      yoffset: this.height / -2 - 30,
      xpos: this.x + this.width / -2 + 30,
      ypos: this.y + this.height / -2 - 30,
      tile: "body",
      damage: 0,
      maxDamage: 4,
      neighborTiles: [2, 4, 8],
      smokeParticles: [],
      fireParticles: [],
    },
    //7
    {
      xoffset: this.width / -2 + 60,
      yoffset: this.height / -2 - 30,
      xpos: this.x + this.width / -2 + 60,
      ypos: this.y + this.height / -2 - 30,
      tile: "bot-left-indent",
      damage: null,
      maxDamage: null,
      neighborTiles: [2, 4, 8],
      smokeParticles: [],
      fireParticles: [],
    },
    //middle row 3
    //8
    {
      xoffset: this.width / -2 - 90,
      yoffset: this.height / -2,
      xpos: this.x + this.width / -2 - 90,
      ypos: this.y + this.height / -2,
      tile: "bot-left",
      damage: 0,
      maxDamage: 4,
      neighborTiles: [9],
      smokeParticles: [],
      fireParticles: [],
    },
    //9
    {
      xoffset: this.width / -2 - 60,
      yoffset: this.height / -2,
      xpos: this.x + this.width / -2 - 60,
      ypos: this.y + this.height / -2,
      tile: "body",
      damage: 0,
      maxDamage: 4,
      neighborTiles: [8, 15],
      smokeParticles: [],
      fireParticles: [],
    },
    //10
    {
      xoffset: this.width / -2 - 30,
      yoffset: this.height / -2,
      xpos: this.x + this.width / -2 - 30,
      ypos: this.y + this.height / -2,
      tile: "body",
      damage: 0,
      maxDamage: 4,
      neighborTiles: [3],
      smokeParticles: [],
      fireParticles: [],
    },
    //11
    {
      xoffset: this.width / -2,
      yoffset: this.height / -2,
      xpos: this.x + this.width / -2,
      ypos: this.y + this.height / -2,
      tile: "body",
      damage: 0,
      maxDamage: 4,
      neighborTiles: [0, 2, 4],
      smokeParticles: [],
      fireParticles: [],
    },
    //window
    {
      xoffset: this.width / -2,
      yoffset: this.height / -2,
      tile: "window",
      smokeParticles: [],
      fireParticles: [],
    },
    //12
    {
      xoffset: this.width / -2 + 30,
      yoffset: this.height / -2,
      xpos: this.x + this.width / -2 + 30,
      ypos: this.y + this.height / -2,
      tile: "body",
      damage: 0,
      maxDamage: 4,
      neighborTiles: [3],
      smokeParticles: [],
      fireParticles: [],
    },
    //13
    {
      xoffset: this.width / -2 + 60,
      yoffset: this.height / -2,
      xpos: this.x + this.width / -2 + 30,
      ypos: this.y + this.height / -2,
      tile: "body",
      damage: 0,
      maxDamage: 4,
      neighborTiles: [3],
      smokeParticles: [],
      fireParticles: [],
    },
    //14
    {
      xoffset: this.width / -2 + 90,
      yoffset: this.height / -2,
      xpos: this.x + this.width / -2 + 60,
      ypos: this.y + this.height / -2,
      tile: "bot-right",
      damage: 0,
      maxDamage: 4,
      neighborTiles: [3],
      smokeParticles: [],
      fireParticles: [],
    },
    //row5
    //15
    {
      xoffset: this.width / -2 - 60,
      yoffset: this.height / -2 + 30,
      xpos: this.x + this.width / -2 - 60,
      ypos: this.y + this.height / -2 + 30,
      tile: "bot-left",
      damage: 0,
      maxDamage: 4,
      neighborTiles: [3],
      smokeParticles: [],
      fireParticles: [],
    },
    //16
    {
      xoffset: this.width / -2 - 30,
      yoffset: this.height / -2 + 30,
      xpos: this.x + this.width / -2 - 30,
      ypos: this.y + this.height / -2 + 30,
      tile: "body",
      damage: 0,
      maxDamage: 4,
      neighborTiles: [3],
      smokeParticles: [],
      fireParticles: [],
    },
    //17
    {
      xoffset: this.width / -2,
      yoffset: this.height / -2 + 30,
      xpos: this.x + this.width / -2,
      ypos: this.y + this.height / -2 + 30,
      tile: "body-bot-indent",
      damage: 0,
      maxDamage: 4,
      neighborTiles: [0, 2, 4],
      smokeParticles: [],
      fireParticles: [],
    },
    //18
    {
      xoffset: this.width / -2 + 30,
      yoffset: this.height / -2 + 30,
      xpos: this.x + this.width / -2 + 30,
      ypos: this.y + this.height / -2 + 30,
      tile: "body",
      damage: 0,
      maxDamage: 4,
      neighborTiles: [3],
      smokeParticles: [],
      fireParticles: [],
    },
    //19
    {
      xoffset: this.width / -2 + 60,
      yoffset: this.height / -2 + 30,
      xpos: this.x + this.width / -2 + 60,
      ypos: this.y + this.height / -2 + 30,
      tile: "bot-right",
      damage: 0,
      maxDamage: 4,
      neighborTiles: [3],
      smokeParticles: [],
      fireParticles: [],
    },
    //booster row
    //20
    {
      xoffset: this.width / -2 - 30,
      yoffset: this.height / -2 + 60,
      tile: "booster",
      damage: null,
      maxDamage: null,
      smokeParticles: [],
      fireParticles: [],
    },
    //21
    {
      xoffset: this.width / -2 + 30,
      yoffset: this.height / -2 + 60,
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
  this.update = function (playerYSpeed, playerXSpeed, playerYPos) {
    if (this.active) {
      this.x -= playerXSpeed * 0.75;
      if (playerYSpeed > 0.5) {
        this.y -= playerYSpeed * 0.2 - 0.4;
      } else {
        this.y -= playerYSpeed * 0.4 + 0.1;
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
          // console.log(tile.smokeParticles.length);
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
  };

  // draw
  this.draw = function (playerYSpeed, playerXSpeed) {
    //draw freighter ship
    freighterShipTiles.forEach((element) => {
      context.save();
      context.fillStyle = "rgb(156, 157, 158)";
      context.translate(this.x, this.y);
      // this updates the position of each tile by adding its individual offset
      element.xpos = this.x + element.xoffset + this.width / 2;
      element.ypos = this.y + element.yoffset + this.height / 2;
      //  context.rotate(this.angle);

      //draw tiles
      shiptilegraphics.draw(element.tile, element.xoffset, element.yoffset);

      //engine booster up down
      if (element.tile === "booster") {
        shiptilegraphics.drawbooster(
          element.tileType,
          element.xoffset,
          element.yoffset,
          "noKey"
        );
        // }
      }

      context.restore();
    });

    // draw particles
    freighterShipTiles.forEach((tile) => {
      //draw smokeParticles
      for (let i = 0; i < tile.smokeParticles.length; i += 1) {
        p = tile.smokeParticles[i];
        if (this.x <= 80 || this.x >= 640) {
          p.x = p.x + tile.xoffset / tile.xpos + this.xSpeed;
        } else {
          p.x = p.x + tile.xoffset / tile.xpos + this.xSpeed / 2;
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
      this.freighterShipTiles.forEach((element) => {
        if (element.damage !== null) {
          // context.save();
          // context.translate(this.x, this.y);
          // context.rotate(this.angle);
          context.fillStyle = "magenta";
          context.fillText(element);
          // context.restore();
        }
      });
    }
  };

  // freighter take damage
  this.takeDamage = function (location, damageAmount) {
    // console.log(this.shieldValue);
    // this.shieldCounter = 0;
    // if (this.shieldValue >= 1) {
    //   //console.log("shield hit!");
    //   this.shieldValue = this.shieldValue - 1;
    //   this.shieldColour = "red";
    //   setTimeout(() => {
    //     this.shieldColour = "lightblue";
    //   }, 100);
    //   setTimeout(() => {
    //     this.shieldColour = "red";
    //   }, 300);
    //   setTimeout(() => {
    //     this.shieldColour = "lightblue";
    //   }, 400);
    //   setTimeout(() => {
    //     this.shieldColour = "red";
    //   }, 600);
    //   setTimeout(() => {
    //     this.shieldColour = "lightblue";
    //   }, 700);
    // } else {
    console.log("freighter hit! [location: " + location + "]");
    if (
      freighterShipTiles[location].damage <
      freighterShipTiles[location].maxDamage
    ) {
      freighterShipTiles[location].damage =
        freighterShipTiles[location].damage + damageAmount;
    } else if (
      (freighterShipTiles[location].damage =
        freighterShipTiles[location].maxDamage)
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
          freighterShipTiles[neighborTile].damage + damageAmount;
      }
    }
    console.log(
      "freighter hit! [location: " +
        location +
        "] tiledamage: " +
        freighterShipTiles[location].damage
    );

    //}
  };
}
