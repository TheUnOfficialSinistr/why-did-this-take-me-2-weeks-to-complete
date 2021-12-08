let ground;
let lander;
var lander_img;
var bg_img;
var groundpart
var meteor
var meteor_img
var meteorGroup
var vx = 0;
var g = 0.05;
var vy = 0;
var f = -0.06
function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
  meteor_img = loadImage("meteor.png");
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);
  groundpart = createSprite(250,600,500,2);
  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;
  lander.setCollider('rectangle', 0,0,200,200)
  meteorGroup = new Group();
  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();

  //fall down
  vy +=g;
  lander.position.y+=vy;

if(groundpart.isTouching(lander)){
lander.position.y = groundpart.position.y;

}

meteor = createSprite

if (frameCount % 60 === 0) {
  createmeteor();
}


if(meteorGroup.isTouching(lander)){
  meteor.velocityX = 0;
 lander.visible = false;
}












  drawSprites();
}


function createmeteor (){
  meteor = createSprite(1200, random(100,500))
  meteor.addImage(meteor_img);
  meteor.scale = .3
meteor.velocityX = random(-10, -20);
meteorGroup.add(meteor);
}





function keyPressed()
{
  if(keyCode==UP_ARROW)
  {
    upward_thrust();
    lander.changeAnimation('thrusting');
    thrust.nextFrame();
    
  }
}

function upward_thrust()
{
  vy = -1;
}