class Drops{
    constructor(x,y){

        var options={
            friction: 0.1,
            restitution:0.1
        }
        

        this.body=Bodies.circle(x,y,5,options);
        this.r=5;
        World.add(world,this.body);

    }

    updateY(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,900),y:random(0,900)})
        }
    }

    showDrop(){
        var pos=this.body.position;

        noStroke();
        fill(83,90,192);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r, this.r);
    }
};