class Box {
    constructor(x,y,width,height,options){
        this.body = Bodies.rectangle(x,y,width,height,options);


        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        World.add(world,this.body)



    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        //name spacing
        translate(pos.x,pos.y);
        rotate(angle)
        rectMode(CENTER);
        fill(211)
        stroke(100)
        rect(0,0,this.width,this.height)
        
        pop();
        

    }

    

    
}