class division{
    constructor(x,y,w,h){
     var options = {
      isStatic: true
     }
     this.body = Bodies.circle(x,y,w,h,options);
     this.w = w;  
     this.h = h;     
    World.add(world,this.body);
    }
    display(){
       // var angle = this.body.angle;
        var pos = this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x,pos.y,this.w,this.h);
    }
}