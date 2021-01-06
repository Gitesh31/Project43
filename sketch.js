var hr = hour();
var mn = minute();
var sc = second();
var scangle,mnangle,hrangle;

function setup() {
  createCanvas(800,400);

}

function draw() {
  background(255,255,255);  
  angleMode(DEGREES);

  scangle = map(sc,0,60,0,360);
  mnangle = map(mn,0,0,0,360);
  hrangle = map(hr,0,0,0,360);

  // drawing seconds hand
  push();
  rotate(scangle);
  stroke(225,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  
  // drawing minutes hand
  push();
  rotate(mnangle);
  stroke(0,225,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  
  // drawing hours hand
  push();
  rotate(hrangle);
  stroke(0,0,225);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
}