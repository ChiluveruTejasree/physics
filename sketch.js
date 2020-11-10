const World= Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;

var engine,world;
var object;

function setup() 
{
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var object_options = 
  {
    isStatic:false
  }
  object=Bodies.rectangle(200,100,50,50,object_options);
  
  World.add(world,object);
   console.log(object);
}

function draw() {
  background(0); 
  rectMode(CENTER);
  Engine.update(engine);
  rect(object.position.x,object.position.y,50,50,)
    


  
}