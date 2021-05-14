const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundIMG;

function preload()
{
    backgroundIMG = loadImage("images/bg.jpg");
}

function setup()
{
    createCanvas(1700, 800)
   engine = Engine.create();
   world = engine.world;

   coach1 = new Train(200, 700, 200, 100);
   coach2 = new Train(450, 700, 200, 100);
   coach3 = new Train(700, 700, 200, 100);
   coach4 = new Train(950, 700, 200, 100);

   ground = new Ground(850, 760, 1700, 30);

   sling1 = new Slingshot(coach1.body, coach2.body);
   sling2 = new Slingshot(coach2.body, coach3.body);
   sling3 = new Slingshot(coach3.body, coach4.body);
}

function draw()
{
    background(backgroundIMG);

    Engine.update(engine);

    coach1.display();
    coach2.display();
    coach3.display();
    coach4.display();
    ground.display();

    sling1.display();
    sling2.display();
    sling3.display();
}