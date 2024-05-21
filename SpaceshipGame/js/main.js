console.log("main.js loaded");

// drawing variable
var canvas;
var context;
var showDevInfo = true;

//game variables
var gameLoop;
var player;

//input variables
var upKey;
var downKey;
var leftKey;
var rightKey;
var shipTiles = [];
var isCollide = false;

//runs once page has loaded
window.onload = function () {
  //assign canvas and context variables
  canvas = document.getElementById("game-canvas");
  context = canvas.getContext("2d");
  setupInputs();
  //create objects
  player = new Player(350, 600);
  shiptileset = new Shiptileset();
  stars = new Stars();
  asteroids = new Asteroids();
  //Start game loop
  gameLoop = setInterval(update, 1000 / 60);
  checkDevInfo();
};

// devInfo checkbox toggle
function checkDevInfo() {
  var checkBox = document.getElementById("myCheck");
  if (checkBox.checked === true) {
    showDevInfo = true;
    console.log("showDevInfo = " + showDevInfo);
    document.getElementById("showDevInfoState").innerText =
      "showDevInfo = " + showDevInfo;
  } else {
    showDevInfo = false;
    console.log("showDevInfo = " + showDevInfo);
    document.getElementById("showDevInfoState").innerText =
      "showDevInfo = " + showDevInfo;
  }
}

//Keyboard inputs
function setupInputs() {
  document.addEventListener("keydown", function (event) {
    if (event.key === "w" || event.key === "ArrowUp") {
      upKey = true;
    } else if (event.key === "a" || event.key === "ArrowLeft") {
      leftKey = true;
    } else if (event.key === "s" || event.key === "ArrowRight") {
      downKey = true;
    } else if (event.key === "d" || event.key === "ArrowDown") {
      rightKey = true;
    }
  });
  document.addEventListener("keyup", function (event) {
    if (event.key === "w" || event.key === "ArrowUp") {
      upKey = false;
    } else if (event.key === "a" || event.key === "ArrowLeft") {
      leftKey = false;
    } else if (event.key === "s" || event.key === "ArrowRight") {
      downKey = false;
    } else if (event.key === "d" || event.key === "ArrowDown") {
      rightKey = false;
    }
  });
}

//update positions
function update() {
  player.update();
  checkPlayerCollision();
  draw();
}

//detect collision with player
function checkPlayerCollision() {
  for (var i = 0; i < shipTiles.length; i++) {
    for (var a = 0; a < asteroids.asteroidsList.length; a++) {
      // console.log(asteroids.asteroidsList[a])
      if (
        shipTiles[i].ypos + 15 >= //bottom of ship tile
          asteroids.asteroidsList[a].y - asteroids.asteroidsList[a].size / 2 && //top of asteroid
        shipTiles[i].ypos - 15 <= //top of ship tile
          asteroids.asteroidsList[a].y + asteroids.asteroidsList[a].size / 2 && //bottom of asteroid
        shipTiles[i].xpos + 15 >= // right of ship tile
          asteroids.asteroidsList[a].x - asteroids.asteroidsList[a].size / 2 && // left side of asteroid
        shipTiles[i].xpos - 15 <= // left of ship tile
          asteroids.asteroidsList[a].x + asteroids.asteroidsList[a].size / 2 // right side of asteroid
      ) {
        if (shipTiles[i].damage !== null) {
          shipTile = shipTiles[i];
          asteroidNo = asteroids.asteroidsList[a];
          asteroids.destroyAsteroid(asteroidNo);
          document.getElementById("isCollide").innerHTML = i;
          player.takeDamage(i, asteroidNo.damage);
          asteroids.asteroidsList.splice(a, 1);
        }
      }
    }
  }
}

//pass ship speed to stars object
function getShipYSpeed() {
  var shipYSpeed = this.player.ySpeed;
  return shipYSpeed;
}

function getShipXSpeed() {
  var shipXSpeed = this.player.xSpeed;
  return shipXSpeed;
}

//draw everything
function draw() {
  //clear the canvas
  context.fillStyle = "black";
  context.fillRect(0, 0, 720, 720);

  //draw stars
  stars.render(getShipYSpeed(), getShipXSpeed());

  //draw player
  player.draw();

  //draw asteroids
  asteroids.render(getShipYSpeed(), getShipXSpeed());
  // asteroids.drawParticles()

  //draw bullets
  // context.fillStyle = "red";
  // bullet = context.fillRect(350, 450, 10, 10);
}
