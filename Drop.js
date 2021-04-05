class Drop {
    constructor(x,y){
        this.rain = Bodies.circle(x, y, 5, options);
  }

  display(){
    var maxDrops = 100;

    for(var i=0; i<maxDrops; i++){
        drops.push(new createDrop(random(0, 400), random(0, 400)));
    }
    
    drops = createSprite(random(100, 1000), 0, 100, 100);
    drops.velocityY = 6;
  }
}
