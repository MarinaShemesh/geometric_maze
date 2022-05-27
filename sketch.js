console.log('diagonals');


function setup() {
  createCanvas(2000, 1750);
  background(255);
  noLoop();
}


function draw() {

  let step = 35;
  for (let x = 0; x < width; x += step) {
    for (let y = 0; y < height; y += step) {

      stroke(3,36,252);
      strokeWeight(10);
      if(random()>0.5){
      line(x, y, x + step, y + step);
      }
      else
      line(x +step, y, x, y + step);
    }
  }
}

function mousePressed() {
  save("diagonal_lines.png");
}


