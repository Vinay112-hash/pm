class tree{
    constructor(x, y,width,height) {
        var options = {
          isStatic:true
        }
        this.body = Bodies.rectangle(x, y,width,height, options);
        this.image = loadImage("images/tree.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,1000,300,500,550);
        pop();
      }
}