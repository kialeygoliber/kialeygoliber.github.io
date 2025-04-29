function setup() {
    createCanvas(1000, 600, WEBGL);
  angleMode(DEGREES);
  strokeWeight(2);
  noFill();
  stroke(224, 253, 213);
  describe(
    'Users can click on the screen and drag to adjust their perspective in 3D space. The space contains a square? of dark purple triangles on a light pink background.'
  );
  }
  function draw() {
    background(50, 14, 59);

    orbitControl();

    for (let zAngle = 0; zAngle < 180; zAngle += 25) {
        for (let xAngle = 0; xAngle < 360; xAngle += 50) {
            push();

            rotateZ(zAngle);
            rotateX(xAngle);

            translate(0, 300, 0);
            box();
            pop();
        }
    }

  }