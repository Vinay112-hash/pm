class slingShot {
    constructor(bodyA,pointB) {

        var options={
        bodyA:bodyA,
        pointB:pointB,
        length:10,
        stiffness:0.04}
      
      this.sling=Constraint.create(options);
      this.bodyA=bodyA;
      this.pointB=pointB;
      World.add(world, this.sling);
    }
    display(){
      if (this.sling.bodyA) {
        var pointA =this.bodyA.position;
      var pointB =this.pointB;
      strokeWeight(3);
      line(pointA.x,pointA.y,pointB.x,pointB.y);
      }

    }
 
    fly()
    {
      this.sling.bodyA=null;
    }

    attach()
    {
       this.sling.bodyA=body; 
    }

  };