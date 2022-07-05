class Box  {
    constructor(x, y, color,Visibility){
      var options = {
        'restitution':0.5,
        'friction':2.0,
        'density':0.5
    }
    this.body = Bodies.rectangle(x,y,60,80,options);
    World.add(world,this.body);
    this.color = color;
    this.Visibility = Visibility - 5;
}
display(){
  var pos = this.body.position;
  var angle = this.body.angle;
  var Visibility = 5;
  rectMode(CENTER);
  push();
  translate(pos.x,pos.y);
  rotate(angle);
  fill(this.color);
  rect(0,0,60,80);
  tint(255,this.Visibility);  
  pop();  

  if(){
    
  }

}

  }

  
  
  