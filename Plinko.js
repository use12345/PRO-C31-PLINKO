class Plinko{
    constructor(x,y){
     var options = {
         restitution: 0.4,

     }
     this.r = 10;     
     this.body = Bodies.circle(x,y,this.r,options);
    // this.color = color(random(0,255),random(0,255),random(0,255));
     World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;


        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}
