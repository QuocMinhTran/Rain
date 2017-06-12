class Drop{
    constructor(){
        this.x = random(width);
        this.y = random(-200,200);
        this.z = random(0,20);
        this.len = map(this.z,0,20,10,20);
        this.yspeed = map(this.z,0,20,1,20);
        
    }
    fall(){
        this.y = this.y + this.yspeed;
        let grav = map(this.z,0,20,0,0.2);
        this.yspeed += grav;
        if(this.y >height){
            this.y = random(-200,200);
            this.yspeed = map(this.z,0,20,1,20);
        }
    }

    show(){
        let thick = map(this.z,0,20,1,3);
        strokeWeight(thick);
        stroke(225,225,225);
        line(this.x,this.y,this.x,this.y+this.len);
    }
}