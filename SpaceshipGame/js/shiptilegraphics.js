function Shiptilegraphics() {
  this.draw = function (tile, x, y) {
    if (tile === "nose") {
      context.beginPath();
      context.fillStyle = "lightgrey";
      context.lineTo(x + 2, y + 8);
      context.lineTo(x + 15, y);
      context.lineTo(x + 28, y + 8);
      context.lineTo(x + 30, y + 30);
      context.lineTo(x, y + 30);
      context.closePath();
      context.fill();
      context.beginPath();
      context.fillStyle = "black";
      context.lineTo(x + 5, y + 12);
      context.lineTo(x + 15, y + 7);
      context.lineTo(x + 25, y + 12);
      context.lineTo(x + 26, y + 20);
      context.lineTo(x + 4, y + 20);
      context.closePath();
      context.fill();
    } else if (tile === "body") {
      context.beginPath();
      context.fillStyle = "lightgrey";
      context.lineTo(x, y);
      context.lineTo(x + 30, y);
      context.lineTo(x + 30, y + 30);
      context.lineTo(x, y + 30);
      context.closePath();
      context.fill();
    } else if (tile === "wing-left") {
      context.beginPath();
      context.fillStyle = "lightgrey";
      context.lineTo(x + 5, y + 5);
      context.lineTo(x + 30, y);
      context.lineTo(x + 30, y + 30);
      context.lineTo(x, y + 30);
      context.closePath();
      context.fill();
    } else if (tile === "wing-right") {
      context.beginPath();
      context.fillStyle = "lightgrey";
      context.lineTo(x, y);
      context.lineTo(x + 25, y + 5);
      context.lineTo(x + 30, y + 30);
      context.lineTo(x, y + 30);
      context.closePath();
      context.fill();
    }
  };

  this.drawbooster = function (tile, x, y, keyState) {
    //engine backward
    if (keyState == "downKey") {
      context.fillStyle = "rgb(255 200 0)";
      context.beginPath();
      context.lineTo(x + 30, y);
      context.lineTo(x + 25, y + 5);
      context.lineTo(x + 15, y + 10);
      context.lineTo(x + 5, y + 5);
      context.lineTo(x, y);
      context.closePath();
      context.fill();
      //engine forward
    } else if (keyState == "upKey") {
      context.fillStyle = "rgb(255 120 0)";
      engineSputter = Math.random() * (1, 2);
      if (engineSputter < 1.5) {
        context.beginPath();
        context.lineTo(x + 30, y);
        context.lineTo(x + 32, y + 15);
        context.lineTo(x + 25, y + 30);
        context.lineTo(x + 15, y + 40);
        context.lineTo(x + 5, y + 30);
        context.lineTo(x - 2, y + 15);
        context.lineTo(x, y);
        context.closePath();
      } else {
        context.beginPath();
        context.lineTo(x + 30, y);
        context.lineTo(x + 32, y + 17);
        context.lineTo(x + 25, y + 32);
        context.lineTo(x + 15, y + 42);
        context.lineTo(x + 5, y + 32);
        context.lineTo(x - 2, y + 17);
        context.lineTo(x, y);
        context.closePath();
      }
      context.fill();
      context.fillStyle = "orange";
      context.beginPath();
      context.lineTo(x + 30, y);
      context.lineTo(x + 25, y + 15);
      context.lineTo(x + 15, y + 28);
      context.lineTo(x + 5, y + 15);
      context.lineTo(x, y);
      context.closePath();
      context.fill();
      context.fillStyle = "rgb(255 200 0)";
      context.beginPath();
      context.lineTo(x + 25, y);
      context.lineTo(x + 23, y + 7);
      context.lineTo(x + 15, y + 15);
      context.lineTo(x + 7, y + 7);
      context.lineTo(x + 5, y);
      context.closePath();
      context.fill();
      //engine static
    } else if (keyState != "leftKey" && keyState != "rightKey") {
      context.fillStyle = "orange";
      engineSputter = Math.random() * (1, 2);
      if (engineSputter < 1.5) {
        context.beginPath();
        context.lineTo(x + 30, y);
        context.lineTo(x + 28, y + 13);
        context.lineTo(x + 23, y + 20);
        context.lineTo(x + 15, y + 25);
        context.lineTo(x + 7, y + 20);
        context.lineTo(x + 2, y + 13);
        context.lineTo(x, y);
        context.closePath();
        context.fill();
      } else {
        context.beginPath();
        context.lineTo(x + 30, y);
        context.lineTo(x + 28, y + 14);
        context.lineTo(x + 23, y + 22);
        context.lineTo(x + 15, y + 27);
        context.lineTo(x + 7, y + 22);
        context.lineTo(x + 2, y + 14);
        context.lineTo(x, y);
        context.closePath();
        context.fill();
      }

      context.fillStyle = "rgb(255 200 0)";
      context.beginPath();
      context.lineTo(x + 25, y);
      context.lineTo(x + 23, y + 7);
      context.lineTo(x + 15, y + 15);
      context.lineTo(x + 7, y + 7);
      context.lineTo(x + 5, y);
      context.closePath();
      context.fill();
    }
    //booster left
    if (keyState == "rightKey") {
      context.fillStyle = "orange";
      context.beginPath();
      context.lineTo(x + 33, y + 15);
      context.lineTo(x + 30, y + 30);
      context.lineTo(x + 10, y + 25);
      context.closePath();
      context.fill();
    }
    //booster right
    if (keyState == "leftKey") {
      context.fillStyle = "orange";
      context.beginPath();
      context.lineTo(x - 3, y + 15);
      context.lineTo(x, y + 30);
      context.lineTo(x + 20, y + 25);
      context.closePath();
      context.fill();
    }
  };
}