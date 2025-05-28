let step = 20;
let offset = 0;
let speed = 2; 
let weight = 4; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  stroke(230);
}

function draw() {
  background(20);
  strokeWeight(weight);

 
  if (keyIsDown(68)) { // Tecla D
    speed = min(speed + 0.1, 10);
  }
  if (keyIsDown(70)) { // Tecla F
    speed = max(speed - 0.1, 0.1);
  }

  
  if (keyIsDown(74)) { // Tecla J
    weight = max(weight - 0.2, 1);
  }
  if (keyIsDown(75)) { // Tecla K
    weight = min(weight + 0.2, 60);
  }

  
  if (keyIsDown(68) || keyIsDown(70) || keyIsDown(74) || keyIsDown(75)) {
    offset += speed;
    if (offset > step) offset = 0;
  }

 
  for (let i = 0; i < min(width, height) / 2; i += step) {
    rect(i - offset, i - offset, width - 2 * i + 2 * offset, height - 2 * i + 2 * offset);
  }
}

 
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
