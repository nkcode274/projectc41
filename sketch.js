const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var batman,batmanIMG
var thunder, thunderIMG;
var rand;

var drop=[];

var maxDrops = 100;


function preload(){
    thunderIMG=loadAnimation("images/thunderbolt/1.png", "images/thunderbolt/2.png", "images/thunderbolt/3.png", "images/thunderbolt/4.png");
    batmanIMG=loadAnimation("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_3.png","images/Walking Frame/walking_4.png","images/Walking Frame/walking_5.png","images/Walking Frame/walking_6.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_8.png")
}

function setup(){
    engine=Engine.create();
    world=engine.world;

    createCanvas(600,627);

    

    batman=new Umbrella(200,450);




    if(frameCount % 150 == 0){
    for(var i=0; i<maxDrops;i++){
        drop.push(new Drops(random(0,400),random(0,400)));
    }
}
}

function draw(){
    Engine.update(engine);
    background("black");

    rand=Math.round(random(1,4));
    if(frameCount%80===0){
      thunder=createSprite(300,50,10,40);
      thunder.addAnimation("thunder",thunderIMG);
      thunder.scale=random(0.3,0.6)
    }


    batman.display();
   
    for(var i=0; i<maxDrops;i++){
        drop[i].showDrop();
        drop[i].updateY()
    }
    drawSprites();
}   

