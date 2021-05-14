class Slingshot
{
    constructor(bodyA, bodyB)
    {
        var options = {bodyA : bodyA, bodyB : bodyB, stifness : 0.04}

        this.slingshot = Constraint.create(options);
         World.add(world, this.slingshot);
    }

    display()
    {
        var pointA = this.slingshot.bodyA.position;
        var pointB = this.slingshot.bodyB.position;

        strokeWeight(10);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}