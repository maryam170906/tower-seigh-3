const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box , polygon;
var slingShot , ground;
var backgroundImg;

function preload(){

}

function setup(){
    var canvas = createCanvas(1500,500);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(900,496,1900,15);

    base1 = new Base(707,475,520,15); 
    base2 = new Base(1218,330,400,15);

    box1 = new Box(525,427,"blue");
    box2 = new Box(586,427,"blue");
    box3 = new Box(647,427,"blue");
    box4 = new Box(708,427,"blue");
    box5 = new Box(769,427,"blue");
    box6 = new Box(830,427,"blue");
    box7 = new Box(891,427,"blue");

    box8 = new Box(586,346,"pink");
    box9 = new Box(647,346,"pink");
    box10 = new Box(708,346,"pink");
    box11 = new Box(769,346,"pink");
    box12 = new Box(830,346,"pink");

    box13 = new Box(647,265,"green");
    box14 = new Box(708,265,"green");
    box15 = new Box(769,265,"green");

    box16 = new Box(708,185,"grey");

    box17 = new Box(1090,281,"blue");
    box18 = new Box(1151,281,"blue");
    box19 = new Box(1212,281,"blue");
    box20 = new Box(1273,281,"blue");
    box21 = new Box(1335,281,"blue");

    box22 = new Box(1151,200,"green");
    box23 = new Box(1212,200,"green");
    box24 = new Box(1273,200,"green");

    box25 = new Box(1212,119,"pink");

   polygon = Bodies.circle(50,200,20);
   World.add(world,polygon)

   slingShot = new SlingShot(polygon.body,{x:170,y:300});
  Engine.run(engine);
}
function draw(){
    background("grey");

    ground.display();

    base1.display();
    base2.display();
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
    box11.display();
    box12.display();

    box13.display();
    box14.display();
    box15.display();

    box16.display();

    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    
    box22.display();
    box23.display();
    box24.display();

    box25.display();

    polygon.display();

   slingShot.display();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   

}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(polygon.body);
    }
}