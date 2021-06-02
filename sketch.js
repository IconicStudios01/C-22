const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;

var box;
var ground;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  var ground_options = {
    isStatic : true
  }

  ground = Bodies.rectangle(200,390,200,20,ground_options);
  World.add(world,ground);

  var box_options = {
    restitution : 1.0
  }

  box = Bodies.circle(200,200,20,box_options);
  World.add(world,box);

}

function draw() {
  background(255,255,255); 
  
  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,200,20);

  ellipseMode(RADIUS);
  ellipse(box.position.x,box.position.y,20,20);

  drawSprites();
}