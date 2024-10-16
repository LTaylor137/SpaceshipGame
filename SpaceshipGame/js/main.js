console.log("main.js loaded");

// drawing variable
var canvas;
var context;
var showDevInfo = false;

//game variables
var gameLoop;
var player;

//input variables
var upKey;
var downKey;
var leftKey;
var rightKey;
var playerShipTiles = [];
var isCollide = false;
 // Mouse position
 let mouseX = this.x;
 let mouseY = this.y;
 let bullets = [];

//runs once page has loaded
window.onload = function () {
  //assign canvas and context variables
  canvas = document.getElementById("game-canvas");
  context = canvas.getContext("2d");
  setupInputs();
  //create objects
  player = new Player(350, 600);
  shiptilegraphics = new Shiptilegraphics();
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
  checkBulletCollision();
  draw();
}

//detect asteroid collision with player
function checkPlayerCollision() {
  for (var i = 0; i < playerShipTiles.length; i++) {
    for (var a = 0; a < asteroids.asteroidsList.length; a++) {
      if (
        playerShipTiles[i].ypos + 15 >= //bottom of ship tile
          asteroids.asteroidsList[a].y - asteroids.asteroidsList[a].size / 2 && //top of asteroid
        playerShipTiles[i].ypos - 15 <= //top of ship tile
          asteroids.asteroidsList[a].y + asteroids.asteroidsList[a].size / 2 && //bottom of asteroid
        playerShipTiles[i].xpos + 15 >= // right of ship tile
          asteroids.asteroidsList[a].x - asteroids.asteroidsList[a].size / 2 && // left side of asteroid
        playerShipTiles[i].xpos - 15 <= // left of ship tile
          asteroids.asteroidsList[a].x + asteroids.asteroidsList[a].size / 2 // right side of asteroid
      ) {
        if (playerShipTiles[i].damage !== null) {
          shipTile = playerShipTiles[i];
          asteroidNo = asteroids.asteroidsList[a];
          asteroids.destroyAsteroid(asteroidNo, player.xSpeed, player.ySpeed);
          document.getElementById("isCollide").innerHTML = i;
          player.takeDamage(i, asteroidNo.damage);
          asteroids.asteroidsList.splice(a, 1);
        }
      }
    }
  }
}

//detect bullet collision with asteroid
function checkBulletCollision() {
  for (var i = 0; i < bullets.length; i++) {
    for (var a = 0; a < asteroids.asteroidsList.length; a++) {
      if (
        bullets[i].ypos >=
          asteroids.asteroidsList[a].y - asteroids.asteroidsList[a].size / 2 && //top of asteroid
        bullets[i].ypos <= 
          asteroids.asteroidsList[a].y + asteroids.asteroidsList[a].size / 2 && //bottom of asteroid
        bullets[i].xpos >= 
          asteroids.asteroidsList[a].x - asteroids.asteroidsList[a].size / 2 && // left side of asteroid
        bullets[i].xpos <= 
          asteroids.asteroidsList[a].x + asteroids.asteroidsList[a].size / 2 // right side of asteroid
      ) {
        console.log("bullet hit asteroid");
        if (bullets[i].damage !== null) {
          asteroidHit = asteroids.asteroidsList[a];
          asteroids.destroyAsteroid(asteroidHit, 0, -3);
          asteroids.asteroidsList.splice(a, 1);
        }
      }
    }
  }
}

//draw everything
function draw() {
  //clear the canvas
  context.fillStyle = "black";
  context.fillRect(0, 0, 720, 720);

  //draw stars
  stars.render(this.player.ySpeed, this.player.xSpeed);

  //draw player
  player.draw();

  //draw asteroids
  asteroids.render(this.player.ySpeed, this.player.xSpeed, this.player.y);
  // asteroids.drawParticles()

  //draw bullets
  // context.fillStyle = "red";
  // bullet = context.fillRect(350, 450, 10, 10);
}
