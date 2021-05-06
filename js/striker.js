class striker{
    constructor(x,y,r){
        var options={
            'restitution':0.8,
        'friction':1.0,
        'density':20, 

        }
        
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,(this.r)/2,options);
        this.image=loadImage("images/striker0.png");
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x, pos.y-100);
        rectMode(CENTER)
        fill(255,0,255)
        imageMode(CENTER);
       image(this.image,0,0,this.r,this.r);
       pop();

    }
}