const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext("2d");
const particles = [];

var maxParticles = 0;

function random(min, max) {
  return Math.random() * (max - min) + min;
}

window.onload = function () {
  //assign canvas and context variables
  // canvas = document.getElementById("game-canvas");
  // ctx = canvas.getContext("2d");

  //Start game loop
  gameLoop = setInterval(draw, 1000 / 60);
};

function draw() {
  maxParticles = maxParticles + 1;

  //fire
  //   const particle = {
  //     x: canvas.width / 2+random(1,10),
  //     y: canvas.width / 2+random(1,10),
  //     xvel: Math.random() + random(-1, 0.1),
  //     yvel: Math.random() + random(0,1),
  //     size: random(5,10),
  //     colour: `rgb(255,${random(0, 255)},${random(0, 100)})`,
  //   };

  //rock
  const particle = {
    x: canvas.width / 2 + random(1, 5),
    y: canvas.width / 2 + random(1, 5),
    xvel: Math.random() + random(-1, 1),
    yvel: Math.random() + random(-1, 1),
    size: random(1, 10),
    colour: `rgb(${random(180, 200)},${random(180, 200)},${random(180, 200)})`,
    life: 0,
  };

  if (maxParticles < 10) {
    particles.push(particle);
  }

  // if (x < 100) {
  //   if (particles.length > 10) {
  //     particles.shift();
  //   }
  // }

  context.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < particles.length; i += 1) {
    p = particles[i];
    if (p.life >= 50) {
      particles.shift(p);
      // console.log(p)
    }
    context.fillStyle = p.colour;
    context.fillRect(p.x, p.y, p.size, p.size);
    p.x += p.xvel;
    p.y += p.yvel;
    p.life = p.life + 1;
  }
    // window.requestAnimationFrame(draw);
}
// }

// window.requestAnimationFrame(draw);
