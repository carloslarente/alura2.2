let cor2;

let cor;

let circuloX; // horizontal

let circuloY; // vertical

function setup() {
  createCanvas(400, 400); // width x height

  background("white");

  cor = color(random(255), random(255), random(255));
  cor2 = color(random(0, 250), random(0, 250), random(0, 250));
  circuloX = [0, 0, 0];

  circuloY = [random(height), random(height), random(height)];
}
function draw() {
  fill(cor);

  for (let contador in circuloX) {
    circle(circuloX[contador], circuloY[contador], 50);

    circuloX[contador] += random(0, 3);

    circuloY[contador] += random(-3, 3);
  }

  // código do mouseIsPressed suprimido
}

function draw() {
  fill(cor);
  if (mouseIsPressed) {
    cor = color(random(0, 250), random(0, 250), random(0, 250), random(0, 100));

    cor2 = color(random(0, 250), random(0, 250), random(0, 250));
    stroke(cor2);
    fill(cor);
  }
  for (let contador in circuloX) {
    circle(circuloX[contador], circuloY[contador], 50);

    circuloX[contador] += random(0, 3);

    circuloY[contador] += random(-3, 3);

    // código do mouseIsPr

    if (circuloX[contador] >= width) {
      circuloX[contador] = 0;

      circuloY[contador] = random(height);
    }
  }
}
