// https://developer.mozilla.org/en-US/docs/Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;

function keyDownHandler(event) {
  if (event.keyCode == 39) {
    rightPressed = true;
    console.log("rightPressed " + rightPressed);
  } else if (event.keyCode == 37) {
    leftPressed = true;
    console.log("leftPressed " + leftPressed);
  }
  if (event.keyCode == 40) {
    downPressed = true;
    console.log("downPressed " + downPressed);
  } else if (event.keyCode == 38) {
    upPressed = true;
    console.log("upPressed " + upPressed);
  }
}

function keyUpHandler(event) {
  if (event.keyCode == 39) {
    rightPressed = false;
    console.log("rightPressed " + rightPressed);
  } else if (event.keyCode == 37) {
    leftPressed = false;
    console.log("leftPressed " + leftPressed);
  }
  if (event.keyCode == 40) {
    downPressed = false;
    console.log("downPressed " + downPressed);
  } else if (event.keyCode == 38) {
    upPressed = false;
    console.log("upPressed " + upPressed);
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if(rightPressed) {
      playerX += 5;
  }
  else if(leftPressed) {
      playerX -= 5;
  }
  if(downPressed) {
      playerY += 5;
  }
  else if(upPressed) {
      playerY -= 5;
  }
  ctx.drawImage(img, playerX, playerY);
  requestAnimationFrame(draw);
}
