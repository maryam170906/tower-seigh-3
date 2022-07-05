class Polygon{
    constructor(x,y,radius){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);

        imageMode(CENTER)
        this.image = loadImage('polygon.png');
        
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
     ellipseMode(RADIUS);
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0,0,this.radius,this.radius);
    ellipseMode(CENTER);
    fill("yellow");
     ellipse(0,0,this.radius,this.radius);
      pop();
    }
}