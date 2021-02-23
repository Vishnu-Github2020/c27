class Chain 
{
    constructor(bodyA,bodyB)
    {
        var options = 
        {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.5,
            length:10
        }
        this.chainBody = Matter.Constraint.create(options);
        World.add(world,this.chainBody);
    }

    display()
    {   
        var a = this.chainBody.bodyA.position;
        var b = this.chainBody.bodyB.position;
        
        strokeWeight(3);
        line (a.x,a.y,b.x,b.y);
    }
}
