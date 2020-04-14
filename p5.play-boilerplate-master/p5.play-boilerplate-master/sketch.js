const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var platform,ball,ground;
function setup() {
  engine = Engine.create();
  world = engine.world;
  var ground_options={
    isStatic : true
  }


  var platform_options={
    isStatic: true
  }

  ground = Bodies.rectangle(200,330,400,20,ground_options)
  World.add(world,ground);

platform = Bodies.rectangle(200,100,200,20,platform_options);
World.add(world,platform);

var ball_options = {

  restitution : 1.0,
  density : 1.0

}

ball  = Bodies.circle(220,200,40,ball_options);
World.add(world,ball);


var options = {
  bodyA : ball,
  bodyB : platform,
  stiffness: 0.004,
  length : 100
}
var string = Constraint.create(options);
World.add(world,string);

fill("White");

  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  rectMode(CENTER);
  rect(platform.position.x,platform.position.y,200,20);

  fill(255);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10);


  fill("black");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,40);

  strokeWeight(8);
  stroke("white");
  line(ball.position.x,ball.position.y,platform.position.x,platform.position.y)




  if(keyCode===32){
  ball.position.y = mouseY;
  ball.position.x = mouseX;
  }

  else if (keyCode === ENTER){
  ball.position.x = 200;

  }
  drawSprites();
}