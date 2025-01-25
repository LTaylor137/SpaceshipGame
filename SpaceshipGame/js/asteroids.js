function Asteroids() {
  this.asteroidsList = [];
  const randomList = [1, 2, 3, 4, 5, 6, 7];
  this.particles = [];

  this.random = function (min, max) {
    return Math.random() * (max - min) + min;
  };

  this.createAsteroids = function () {
    for (var i = 0; this.asteroidsList.length < 30; i++) {
      asteroidXPos = this.random(-720, 1440);
      asteroidYPos = this.random(-720, 0);
      asteroidSize = this.random(20, 60);
      asteroidRotation = this.random(-20, 20);
      asteroidRandom = this.random(1, 8);
      asteroidRandom2 = this.random(1, 8);
      asteroidRandom3 = this.random(1, 8);
      xDirection = this.random(-2, 2);

      const asteroid = {
        x: asteroidXPos,
        y: asteroidYPos,
        size: asteroidSize,
        rotation: asteroidRotation,
        random: asteroidRandom,
        random2: asteroidRandom2,
        random3: asteroidRandom3,
        xDirection: xDirection,
        damage: 1,
      };

      this.asteroidsList.push(asteroid);
    }
  };

  //draw the asteroid in its current position.
  this.drawAsteroid = function (
    x,
    y,
    size,
    rotation,
    random,
    random2,
    random3
  ) {
    context.fillStyle = "rgb(170 180 170)";
    context.save();
    context.translate(x, y);
    x = size - size;
    y = size - size;
    context.rotate(rotation);
    context.beginPath();
    context.lineTo(x - size / 2.5, y - size / 2.5); //tl
    context.lineTo(x + random3, y - size / 2 + random); //tm
    context.lineTo(x + size / 2.5, y - size / 2.5); //tr
    context.lineTo(x + size / 2 + random2, y + random); //rm
    context.lineTo(x + size / 2.5, y + size / 2.5); //br
    context.lineTo(x + random, y + size / 2 + random); //bm
    context.lineTo(x - size / 2.5, y + size / 2.5); //bl
    context.lineTo(x - size / 2 - random3, y - random2); //lm
    context.closePath();
    context.fill();

    //draw centre pivot point of asteroid
    if (showDevInfo == true) {
      context.fillStyle = "red";
      context.fillRect(x - 2, y - 2, 4, 4);
    }
    context.restore();
  };

  this.destroyAsteroid = function (asteroid, xSpeed, ySpeed) {
    pxpos = asteroid.x;
    pypos = asteroid.y;
    sxSpeed = xSpeed
    sySpeed = ySpeed

    //create rock particles
    for (let i = 0; i < asteroid.size/3; i += 1) {
      const particle = {
        x: pxpos + this.random(-asteroid.size / 3, asteroid.size / 3),
        y: pypos + this.random(-5, asteroid.size / 2),
        xvel: asteroid.xDirection * Math.random() + this.random(-1, 1),
        yvel: Math.random() + this.random(-1, 1),
        size: this.random(7, 15),
        life: this.random(0, 50),
      };
      this.particles.push(particle);
    }
    //create more rocks travelling in direction of ship
    for (let i = 0; i < asteroid.size; i += 1) {
      const particle = {
        x: pxpos + this.random(-asteroid.size / 3, asteroid.size / 3),
        y: pypos + this.random(-5, asteroid.size / 2),
        xvel: asteroid.xDirection * Math.random() + this.random(-1, 1) + sxSpeed/2,
        yvel: Math.random() + this.random(-1, 1) + sySpeed/2-0.5,
        size: this.random(1, 10),
        life: this.random(0, 50),
      };
      this.particles.push(particle);
    }
  };

  // update the asteroid + particle position
  this.render = function (shipYSpeed, shipXSpeed, shipYPos) {
    //take the players ship speed
  
    if (shipXSpeed <= 10 && shipXSpeed >= -10) {
      asteroidXSpeed = -shipXSpeed;
    }

    if (shipYSpeed <= 0.5 && shipYSpeed >= -1 && shipYPos < 640) {
      asteroidYSpeed = -shipYSpeed + 4;
    } 
    //draw asteroids
    for (var i = 0; i < this.asteroidsList.length; i++) {
      this.drawAsteroid(
        (this.asteroidsList[i].x +=
          asteroidXSpeed * 1 + this.asteroidsList[i].xDirection * 0.5),
        (this.asteroidsList[i].y += asteroidYSpeed * 1),
        this.asteroidsList[i].size,
        (this.asteroidsList[i].rotation +=
          ((this.asteroidsList[i].rotation / 10) * Math.PI) / 180),
        this.asteroidsList[i].random,
        this.asteroidsList[i].random2,
        this.asteroidsList[i].random3
      );

      if (this.asteroidsList[i].y > 750) {
        this.asteroidsList.splice(i, 1);
        this.createAsteroids();
      }
    }
    //draw particles
    for (let i = 0; i < this.particles.length; i += 1) {
      p = this.particles[i];
     
      context.fillStyle = "rgb(170 180 170)";
      context.fillRect(p.x, p.y, p.size, p.size);
      p.x += p.xvel + asteroidXSpeed;
      p.y += p.yvel + 2;
      p.life = p.life + 1;

      if (p.life >= 100) {
        this.particles.shift(p);
      }

    }

    // this.drawParticles();
  };

  this.createAsteroids();
}
