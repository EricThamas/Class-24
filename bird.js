class Bird{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.5,
            'friction':1,
            'density':5
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        pos.x=mouseX;
        pos.y=mouseY;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill("red");
        stroke ("red");
        strokeWeight(4);
        rect(0, 0, this.width, this.height);
        pop();
      }
    };
    
