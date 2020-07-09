class Bird  {
  constructor(x,y){
    var options={
      restitution:0.9,
      friction:0.5,
      density:0.9
    }
    this.body=Bodies.rectangle(x,y,40,40); 
    World.add(world,this.body);
    Matter.Body.setMass(this.body,this.body.mass*200);
    this.r=40;
  }

  display() {
   push();
   var angle=this.body.angle;
   var pos=this.body.position;
   rectMode(CENTER);
   translate(pos.x,pos.y);
   rotate(angle);
   
   fill("pink");
   rect(0,0,this.r,this.r);
   
   pop();
}
}  
