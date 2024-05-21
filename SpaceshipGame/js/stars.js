function Stars() {
  var starsFarList = [];
  var starsMidList = [];
  var starsNearList = [];
  var newStartPosition = 0;

  var getRandomColour = function () {
    var randomBetween = (min, max) =>
      min + Math.floor(Math.random() * (max - min));
    var r = randomBetween(100, 255);
    var g = randomBetween(100, 255);
    var b = randomBetween(255, 255);
    var rgb = `rgb(${r},${g},${b})`;
    return rgb;
  };

  var createFarStars = function () {
    for (var i = 0; starsFarList.length < 2000; i++) {
      starSize = Math.random() * (0.1, 2);
      starXPos = Math.random() * (0, 3160);
      starYPos = Math.random() * (0, 720);
      const star = {
        x: starXPos + -1720,
        y: starYPos + newStartPosition,
        starSize: starSize,
        starColour: getRandomColour(),
      };
      starsFarList.push(star);
    }
  };

  var createMidStars = function () {
    for (var i = 0; starsMidList.length < 500; i++) {
      starSize = Math.random() * (0.5, 2);
      starXPos = Math.random() * (0, 2160);
      starYPos = Math.random() * (0, 720);
      const star = {
        x: starXPos + -720,
        y: starYPos + newStartPosition,
        starSize: starSize,
        starColour: getRandomColour(),
      };
      starsMidList.push(star);
    }
  };

  var createNearStars = function () {
    for (var i = 0; starsNearList.length < 100; i++) {
      starSize = Math.random() * (1, 4);
      starXPos = Math.random() * (0, 2160);
      starYPos = Math.random() * (0, 720);
      const star = {
        x: starXPos + -720,
        y: starYPos + newStartPosition,
        starSize: starSize,
        starColour: getRandomColour(),
      };
      starsNearList.push(star);
    }
  };

  //draw the star in its current position.
  var drawFarStar = function (x, y, size, colour) {
    context.fillStyle = colour;
    context.fillRect(x, y, size, size, 0);
  };

  var drawMidStar = function (x, y, size, colour) {
    context.fillStyle = colour;
    context.fillRect(x, y, size, size, 0);
  };

  var drawNearStar = function (x, y, size, colour) {
    context.fillStyle = colour;
    context.fillRect(x, y, size, size, 0);
  };

  // update the stars position
  this.render = function (shipYSpeed, shipXSpeed) {
    
    //take the players ship speed
    if (shipXSpeed <= 3 && shipXSpeed >= -3) {
      starXSpeed = -shipXSpeed;
    }
  
    if (shipYSpeed <= 0.5 && shipYSpeed >= -1) {
      starYSpeed = -shipYSpeed + 1.25;
    }

    for (var i = 0; i < starsFarList.length; i++) {
      drawFarStar(
        (starsFarList[i].x += starXSpeed * 0.125),
        (starsFarList[i].y += starYSpeed * 0.25),
        starsFarList[i].starSize,
        starsFarList[i].starColour
      );
      if (starsFarList[i].y > 750) {
        newStartPosition = -750;
        starsFarList.splice(i, 1);
        createFarStars();
      }
    }
    for (var i = 0; i < starsMidList.length; i++) {
      drawMidStar(
        (starsMidList[i].x += starXSpeed * 0.25),
        (starsMidList[i].y += starYSpeed * 0.5),
        starsMidList[i].starSize,
        starsMidList[i].starColour
      );
      if (starsMidList[i].y > 750) {
        newStartPosition = -750;
        starsMidList.splice(i, 1);
        createMidStars();
      }
    }
    for (var i = 0; i < starsNearList.length; i++) {
      drawNearStar(
        (starsNearList[i].x += starXSpeed * 0.5),
        (starsNearList[i].y += starYSpeed * 1),
        starsNearList[i].starSize,
        starsNearList[i].starColour,
        (document.getElementById("STARprintySpeed").innerHTML = starYSpeed * 1)
      );
      if (starsNearList[i].y > 750) {
        newStartPosition = -750;
        starsNearList.splice(i, 1);
        createNearStars();
      }
    }
  };

  createFarStars();
  createMidStars();
  createNearStars();
  
}
