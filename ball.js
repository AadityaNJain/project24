class Ball{
    constructor(x,y,radius){
        var option = {
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2
    }
    this.ball = circle(x,y,radius,option);
    World.add(world,this.ball);
}
    //display(){
       // keyPressed(){
          //null
        //}

    //}
    display(){
        //this.body.position.x
        stroke(4);
        //fill("red");
        circle(400,379,20);
    }
}