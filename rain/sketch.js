let drops = [];
function setup() {
    createCanvas(640,360);
    for(let i = 0; i<500;i++){
        drops[i]= new Drop();
    }
}

function draw() {
    background(0,0,0);
    for(let i = 0; i<drops.length;i++){
        drops[i].fall();
        drops[i].show();
    }    
}