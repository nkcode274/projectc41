class Umbrella{
    constructor(x,y){

        var options={
            isStatic: true
        }

        this.image=loadImage("images/Walking Frame/walking_1.png")
        this.body=Bodies.circle(x,y,50,options);
         this.radius = 50;
        World.add(world,this.body);

    }
    display(){

        var pos = this.body.position;

        
        imageMode(RADIUS);
        image(this.image,pos.x,pos.y,200,450);
     
    }
};