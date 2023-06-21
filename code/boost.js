class BoostPoints{
    
    constructor(posX,posY,size,img) 
    {
      
      this.boostPosX = posX;
      this.boostPosY = posY;
      this.boostSize = size;
      this.boostType =img; 
      this.collided = false; 
     
    }
     
    draw()
    {
        
        image( this.boostType,this.boostPosX,this.boostPosY,this.boostSize,this.boostSize);
        
    }
  
    collision (birdXpos,birdYpos,birdSize)
    {
        var d = dist(birdXpos, birdYpos,  this.boostPosX, this.boostPosY);
        if(d < this.boostSize+birdSize)
        {
            this.collided = true;
            return true;
        }
        else 
            return false;
    }
   
  }

  class BoostTransperernt{
    
    constructor(posX,posY,size,img) 
    {
      
      this.boostPosX = posX;
      this.boostPosY = posY;
      this.boostSize = size;
      this.boostType =img; 
      this.collided = false; 
      this.CancelPipeColission = false;
      this.timer = 5;
     
     
    }
     
    draw()
    {
       
        image( this.boostType,this.boostPosX,this.boostPosY,this.boostSize,this.boostSize);
       
    }
  
    collision (birdXpos,birdYpos,birdSize)
    {
        var d = dist(birdXpos, birdYpos,  this.boostPosX, this.boostPosY);
        if(d < this.boostSize+birdSize-50)
        {
            this.collided = true;
            return true;
        }
        else 
            return false;
    }


  }