function Shiptilegraphics() {
  this.draw = function (tileType, x, y) {
    context.beginPath();
    context.fillStyle = "lightgrey";

    switch (tileType) {
      case "nose":
        drawNose(x, y);
        break;
      case "body":
        drawBody(x, y);
        break;
      case "wing-left":
        drawWingLeft(x, y);
        break;
      case "wing-right":
        drawWingRight(x, y);
        break;
    }

    context.closePath();
    context.fill();
  };

  this.drawbooster = function (tileType, x, y, keyState) {
    if (keyState === "downKey") {
      drawEngineBackward(x, y);
    } else if (keyState === "upKey") {
      drawEngineForward(x, y);
    } else if (keyState !== "leftKey" && keyState !== "rightKey") {
      drawEngineStatic(x, y);
    }

    if (keyState === "rightKey") {
      drawBoosterLeft(x, y);
    }

    if (keyState === "leftKey") {
      drawBoosterRight(x, y);
    }
  };

  function drawNose(x, y) {
    context.lineTo(x + 2, y + 8);
    context.lineTo(x + 15, y);
    context.lineTo(x + 28, y + 8);
    context.lineTo(x + 30, y + 30);
    context.lineTo(x, y + 30);
    context.fillStyle = "black";
    context.lineTo(x + 5, y + 12);
    context.lineTo(x + 15, y + 7);
    context.lineTo(x + 25, y + 12);
    context.lineTo(x + 26, y + 20);
    context.lineTo(x + 4, y + 20);
  }

  function drawBody(x, y) {
    context.lineTo(x, y);
    context.lineTo(x + 30, y);
    context.lineTo(x + 30, y + 30);
    context.lineTo(x, y + 30);
  }

  function drawWingLeft(x, y) {
    context.lineTo(x + 5, y + 5);
    context.lineTo(x + 30, y);
    context.lineTo(x + 30, y + 30);
    context.lineTo(x, y + 30);
  }

  function drawWingRight(x, y) {
    context.lineTo(x, y);
    context.lineTo(x + 25, y + 5);
    context.lineTo(x + 30, y + 30);
    context.lineTo(x, y + 30);
  }

  function drawEngineBackward(x, y) {
    context.fillStyle = "rgb(255 200 0)";
    context.lineTo(x + 30, y);
    context.lineTo(x + 25, y + 5);
    context.lineTo(x + 15, y + 10);
    context.lineTo(x + 5, y + 5);
    context.lineTo(x, y);
  }

  function drawEngineForward(x, y) {
    context.fillStyle = "rgb(255 120 0)";
    let engineSputter = Math.random() * 2;
    if (engineSputter < 1.5) {
      context.lineTo(x + 30, y);
      context.lineTo(x + 32, y + 15);
      context.lineTo(x + 25, y + 30);
      context.lineTo(x + 15, y + 40);
      context.lineTo(x + 5, y + 30);
      context.lineTo(x - 2, y + 15);
    } else {
      context.lineTo(x + 30, y);
      context.lineTo(x + 32, y + 17);
      context.lineTo(x + 25, y + 32);
      context.lineTo(x + 15, y + 42);
      context.lineTo(x + 5, y + 32);
      context.lineTo(x - 2, y + 17);
    }
    context.lineTo(x, y);
    context.fill();
    context.fillStyle = "orange";
    context.lineTo(x + 30, y);
    context.lineTo(x + 25, y + 15);
    context.lineTo(x + 15, y + 28);
    context.lineTo(x + 5, y + 15);
    context.lineTo(x, y);
    context.fill();
    context.fillStyle = "rgb(255 200 0)";
    context.lineTo(x + 25, y);
    context.lineTo(x + 23, y + 7);
    context.lineTo(x + 15, y + 15);
    context.lineTo(x + 7, y + 7);
    context.lineTo(x + 5, y);
  }

  function drawEngineStatic(x, y) {
    context.fillStyle = "orange";
    let engineSputter = Math.random() * 2;
    if (engineSputter < 1.5) {
      context.lineTo(x + 30, y);
      context.lineTo(x + 28, y + 13);
      context.lineTo(x + 23, y + 20);
      context.lineTo(x + 15, y + 25);
      context.lineTo(x + 7, y + 20);
      context.lineTo(x + 2, y + 13);
    } else {
      context.lineTo(x + 30, y);
      context.lineTo(x + 28, y + 14);
      context.lineTo(x + 23, y + 22);
      context.lineTo(x + 15, y + 27);
      context.lineTo(x + 7, y + 22);
      context.lineTo(x + 2, y + 14);
    }
    context.lineTo(x, y);
    context.fill();
    context.fillStyle = "rgb(255 200 0)";
    context.lineTo(x + 25, y);
    context.lineTo(x + 23, y + 7);
    context.lineTo(x + 15, y + 15);
    context.lineTo(x + 7, y + 7);
    context.lineTo(x + 5, y);
  }

  function drawBoosterLeft(x, y) {
    context.fillStyle = "orange";
    context.lineTo(x + 33, y + 15);
    context.lineTo(x + 30, y + 30);
    context.lineTo(x + 10, y + 25);
  }

  function drawBoosterRight(x, y) {
    context.fillStyle = "orange";
    context.lineTo(x - 3, y + 15);
    context.lineTo(x, y + 30);
    context.lineTo(x + 20, y + 25);
  }
}
