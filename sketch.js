const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var log1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,50,50);
    box2 = new Box(920,320,50,50);
    ground = new Ground(600,height,10000,20);
    pig1 = new pig(825,350,40,40);
    log1 = new log(810,260,300,20,PI);
    box3 = new Box(700,240,50,50);
    box4 = new Box(920,240,50,50);
    pig2 = new pig(825,240,40,40);
    log2 = new log(810,140,300,20,PI);
    box5 = new Box(825,100,50,50);
    log3 = new log(920,80,135,20,PI/7);
    log4 = new log(750,80,135,20,-PI/7);
    bird = new Bird(250,240,40,40);
}

function draw(){
    background(0);
    Engine.update(engine);
   //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
}