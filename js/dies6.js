class dies6{
    constructor(x,y,width,height){
        var options={
            'restitution':0.8,
        'friction':1.0,
        'density':20,
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.image=loadImage("images/no60.png");
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y)
        stroke("orange");
        strokeWeight(7);
        fill("green");
        rotate(angle);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}