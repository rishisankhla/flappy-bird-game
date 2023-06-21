//The bird class, containing all methods related to the bird

class birdskin1{
    
  constructor() {
    this.spriteNum = 0;
    this.birdposX = width/2;
    this.birdposY = height/2;
    this.birSize = 100;
    this.spriteVector = [];
    this.frameR = 15
  }

  spriteanimation(x,y) {
    if(this.spriteNum == 9)
      this.spriteNum = 0;
      
    image(this.spriteVector[this.spriteNum],
                         x-this.birSize/2,
                         y-this.birSize/2,
                         this.birSize,
                         this.birSize);
    this.spriteNum+=1;
  }

  BirdSetupPos() {
    image(this.spriteVector[this.spriteNum],
                            this.birdposX,
                            this.birdposY,
                            this.birSize,
                            this.birSize);
  }
}