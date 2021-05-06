
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Mouse= Matter.Mouse;
const MouseConstraint=Matter.MouseConstraint;
const Render = Matter.Render;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  /*let canvasmouse = Mouse.create(canvas.elt);
    canvasmouse.pixelRatio = pixelDensity();
    let options = {
        mouse: canvasmouse
    };
    mConstraint=MouseConstraint.create(engine,options);
    World.add(world,mConstraint);*/

 ground1 = new ground(400,690,800,20);
  dies1_1 = new dies1(600,600,50,50);
  dies2_1 = new dies2(600,600,50,50);
  dies3_1 = new dies3(600,600,50,50);
  dies4_1 = new dies4(600,600,50,50);
  dies5_1 = new dies5(600,600,50,50);
  dies6_1 = new dies6(600,600,50,50);
  dies7_1 = new dies1(500,600,50,50);
  dies8_1 = new dies2(500,600,50,50);
  dies9_1 = new dies3(500,600,50,50);
  dies10_1 = new dies4(500,600,50,50);
  dies11_1 = new dies5(500,600,50,50);
  dies12_1 = new dies6(500,600,50,50);
  dies13_1 = new dies1(400,600,50,50);
  dies14_1 = new dies2(400,600,50,50);
  dies15_1 = new dies3(400,600,50,50);
  dies16_1 = new dies4(400,600,50,50);
  dies17_1 = new dies5(400,600,50,50);
  dies18_1 = new dies6(400,600,50,50);
  striker1=new striker(100,400,50)
  rope1=new Rope(striker1.body,{x:100,y:400});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground1.display();
  dies1_1.display();
  dies2_1.display();
  dies3_1.display();
  dies4_1.display();
  dies5_1.display();
  dies6_1.display();
  dies7_1.display();
  dies8_1.display();
  dies9_1.display();
  dies10_1.display();
  dies11_1.display();
  dies12_1.display();
  dies13_1.display();
  dies14_1.display();
  dies15_1.display();
  dies16_1.display();
  dies17_1.display();
  dies18_1.display();
  striker1.display();
  rope1.display();

  

  
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(striker1.body,{x:mouseX,y:mouseY});
 
}
function mouseReleased(){
 rope1.fly();

}



