class Snow{
    constructor(x,y,w,h){
        var options={
            restitution:0.4
        }
    

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.image = loadImage("girl.png");
        World.add(world,this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(this.color)
        pop();
    }
}