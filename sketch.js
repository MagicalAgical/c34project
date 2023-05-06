
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;




function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  btn = createButton("push")
  btn.position(30,360)
  btn.mouseClicked(blowAir1);

var options={
  isStatic: false,
  density : 0.01,
  frictionAir : 0.2,
  showVelocity: true
  
}


var ground_options={
  isStatic : true,
  
}
 box = new Box(190,50,60,40,options)
 box1 = new Box(190,50,60,40,options)
 box2 = new Box(190,50,60,40,options)
 box3 = new Box(190,50,60,40,options)
 box4 = new Box(250,50,60,40,options)
 box5 = new Box(250,50,60,40,options)
 box6 = new Box(250,40,60,40,options)
 box7 = new Box(250,40,60,40,options)
 box8 = new Box(190,40,60,40,options)
 box9 = new Box(250,40,60,40,options)
 box10 = new Box(110,40,60,40,options)

 ground=new Box(200,390,400,20,ground_options); 
}


function draw() 
{
  background(51);
  Engine.update(engine);
  box.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  
  ground.display();
  
}


function blowAir1(){

  Matter.Body.applyForce(box10,{x:0,y:0},{x:5,y:0})

}

