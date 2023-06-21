//background 2 code

function background_2(){

   
    this.clouds = [{x_pos: 100 , y_pos: 100, size: .2},
                   {x_pos: 600 , y_pos: 130, size: .5},
                   {x_pos: 800 , y_pos: 50 , size: .8},
                   {x_pos: 1200, y_pos: 100, size: .7},
                   {x_pos: 1600, y_pos: 130, size: .7}];
    
    this.trees_x = [120,300,900,1170];
    
    this.mountains = [{x_pos: 400 , y_pos: 493, size:.7},
                      {x_pos: 900 , y_pos: 493, size:.6}];
    
    function update(x){
        if(x>-300){
            x=x-1;
            return x;
        }
        else{
            return 1300;
        }
    }
    
    this.draw = function(){
        
        push();
        for(var i=0;i<this.mountains.length; i++)
        {
            fill(168,134,117);
            triangle(this.mountains[i].x_pos                            ,this.mountains[i].y_pos    
                     ,this.mountains[i].x_pos+420*this.mountains[i].size,this.mountains[i].y_pos    
                     ,this.mountains[i].x_pos+225*this.mountains[i].size,this.mountains[i].y_pos-252*this.mountains[i].size);
            fill(148,114,96);
            triangle(this.mountains[i].x_pos                            ,this.mountains[i].y_pos    
                     ,this.mountains[i].x_pos+150*this.mountains[i].size,this.mountains[i].y_pos    
                     ,this.mountains[i].x_pos+225*this.mountains[i].size,this.mountains[i].y_pos-252*this.mountains[i].size);
            fill(255,255,255);
            triangle(this.mountains[i].x_pos+206*this.mountains[i].size ,this.mountains[i].y_pos-197*this.mountains[i].size
                     ,this.mountains[i].x_pos+268*this.mountains[i].size,this.mountains[i].y_pos-197*this.mountains[i].size
                     ,this.mountains[i].x_pos+225*this.mountains[i].size,this.mountains[i].y_pos-252*this.mountains[i].size);
            triangle(this.mountains[i].x_pos+245*this.mountains[i].size ,this.mountains[i].y_pos-200*this.mountains[i].size
                     ,this.mountains[i].x_pos+268*this.mountains[i].size,this.mountains[i].y_pos-197*this.mountains[i].size
                     ,this.mountains[i].x_pos+289*this.mountains[i].size,this.mountains[i].y_pos-169*this.mountains[i].size);
            fill(235,222,216);
            triangle(this.mountains[i].x_pos+176*this.mountains[i].size ,this.mountains[i].y_pos-197*this.mountains[i].size
                     ,this.mountains[i].x_pos+209*this.mountains[i].size,this.mountains[i].y_pos-197*this.mountains[i].size
                     ,this.mountains[i].x_pos+225*this.mountains[i].size,this.mountains[i].y_pos-252*this.mountains[i].size);
            triangle(this.mountains[i].x_pos+177*this.mountains[i].size ,this.mountains[i].y_pos-198*this.mountains[i].size
                     ,this.mountains[i].x_pos+209*this.mountains[i].size,this.mountains[i].y_pos-198*this.mountains[i].size
                     ,this.mountains[i].x_pos+180*this.mountains[i].size,this.mountains[i].y_pos-147*this.mountains[i].size);
            this.mountains[i].x_pos = update(this.mountains[i].x_pos);
        }
        for(var i=0;i<this.clouds.length; i++)
        {
            fill(255,255,255);
            ellipse(this.clouds[i].x_pos                       ,this.clouds[i].y_pos,100*this.clouds[i].size,100*this.clouds[i].size);
            ellipse(this.clouds[i].x_pos+55*this.clouds[i].size,this.clouds[i].y_pos,80*this.clouds[i].size ,80*this.clouds[i].size );
            ellipse(this.clouds[i].x_pos-55*this.clouds[i].size,this.clouds[i].y_pos,80*this.clouds[i].size ,80*this.clouds[i].size );
            ellipse(this.clouds[i].x_pos+95*this.clouds[i].size,this.clouds[i].y_pos,40*this.clouds[i].size ,40*this.clouds[i].size );
            this.clouds[i].x_pos = update(this.clouds[i].x_pos);
        }
        var floorPos_y=floorPos;
        for(var i=0;i<this.trees_x.length;i++)
        {
            push();
            fill(104,89,38);
            rect(this.trees_x[i],floorPos_y-120,30,120);
            stroke(2);
            strokeWeight(2);
            fill(0,155,0);
            line(this.trees_x[i]         ,floorPos_y-120,this.trees_x[i]   ,floorPos_y);
            line(this.trees_x[i]+30      ,floorPos_y-120,this.trees_x[i]+30,floorPos_y);
            triangle(this.trees_x[i]-70  ,floorPos_y-82 
                     ,this.trees_x[i]+100,floorPos_y-82
                     ,this.trees_x[i]+15 ,floorPos_y-182);
            triangle(this.trees_x[i]-70  ,floorPos_y-132 
                     ,this.trees_x[i]+100,floorPos_y-132
                     ,this.trees_x[i]+15 ,floorPos_y-232);
            triangle(this.trees_x[i]-70  ,floorPos_y-182 
                     ,this.trees_x[i]+100,floorPos_y-182
                     ,this.trees_x[i]+15 ,floorPos_y-282);
            pop();
            this.trees_x[i]=update(this.trees_x[i]);
        }
        pop();
    }
    
    
}