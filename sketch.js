function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(200, 150, 150);
    circle(350, 50, 100);
    circle(250, 50, 100);
    circle(150, 50, 100);
    circle(50, 50, 100);
    circle(50, 350, 100);
    circle(150, 350,100);
    circle(250, 350,100);
    circle(350,350, 100);
    if (mouseIsPressed) {
      console.log(mouseX, mouseX);
    }
  }