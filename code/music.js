





class GameMusic
{
  constructor()
  {
    this.gameSound1;
    this.gameSound2;
    this.gameSound3;
    this.gameSound4;
    //.....add more sounds 
  }

  playSound1()
  {
    this.gameSound1.play();
  }
  playSound2()
  {
    this.gameSound2.play();
  }
  playSound3()
  {
    this.gameSound3.play();
  }
  playSound4()
  {
    this.gameSound4.play();
  }

  stopSound1()
  {
    if(gameSound1.isPlaying())
      this.gameSound1.stop();
  }
  
  stopSound2()
  {
   // if(gameSound2.isPlaying())
      this.gameSound2.stop();
  }
  stopSound3()
  {
    //if(gameSound3.isPlaying())
      this.gameSound3.stop();
  }
  stopSound4()
  {
   // if(gameSound4.isPlaying())
      this.gameSound4.stop();
  }

  loopSound1()
  {
    this.gameSound1.loop();
  }
  loopSound2()
  {
    this.gameSound2.loop();
  }
  loopSound3()
  {
    this.gameSound3.loop();
  }
  loopSound4()
  {
    this.gameSound4.loop();
  }

  PauseloopSound1()
  {
    this.gameSound1.pause();
  }
  PauseloopSound2()
  {
    this.gameSound2.pause();
  }
  PauseloopSound3()
  {
    this.gameSound3.pause();
  }
  PauseloopSound4()
  {
    this.gameSound4.pause();
  }



}