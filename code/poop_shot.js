// code for collecting coin
function poop_main_logic(){
    
    this.poop_array=[];
    this.coin_array=[];
    this.poop_final_falling_speed=20;
    this.point_collected=false;
    this.two_coin_difference=100;
    
    function removeparticular(arr, value) 
    {
        var index = arr.indexOf(value);
        arr.splice(index, 1);
        return arr;
    }
    
    this.draw = function(overall_game_speed){
        
        for(var i=0;i<this.poop_array.length;i++){
            this.poop_array[i].draw();
            this.poop_array[i].move();
            this.poop_array[i].poop_falling_speed=this.poop_final_falling_speed;
            this.poop_array[i].poop_moving_speed=overall_game_speed;
            if(this.poop_array[i].check_exit_screen()){
                removeparticular(this.poop_array, this.poop_array[i]);
            }
        }
        
        for(var i=0;i<this.coin_array.length;i++){
            this.coin_array[i].draw();
            this.coin_array[i].move_speed=overall_game_speed;
            this.coin_array[i].move();
            for(var p=0;p<this.poop_array.length;p++){
                if(this.coin_array[i].check_poop_touch(this.poop_array[p].x,this.poop_array[p].y)){
                    this.coin_array[i].isFound=true;
                    this.point_collected=true;
                    removeparticular(this.poop_array, this.poop_array[p]);
                }
            }
            if(this.coin_array[i].check_exit_screen() || this.coin_array[i].isFound){
                removeparticular(this.coin_array, this.coin_array[i]);
            }
        }
//        console.log(frameCount);
        if(frameCount%this.two_coin_difference == 0){
            this.coin_array.push(new our_coin(1000,510));
        }
    }
    
    this.keyPressed = function(b_x,b_y){
        if(keyCode==78){
            poop_sound.play();
            this.poop_array.push(new bird_poop(b_x,b_y));
        }
    }
}


function bird_poop(x,y){
    
    this.x = x;
    this.y = y;
    this.poop_falling_speed=0;
    this.poop_moving_speed=0;
    
    this.draw = function(){
        image(poop,this.x-12.5,this.y-12.5,25,25);
    }
    
    this.move = function(){
        this.y+=this.poop_falling_speed;
        this.x-=this.poop_moving_speed;
    }
    
    this.check_exit_screen = function(){
        if(this.y>height+100){
            return true;
        }
        else{
            return false;
        }
    }
}

function our_coin(x_pos,y_pos){
    
    this.x_pos = x_pos;
    this.y_pos  = y_pos; //510 is the desired
    this.move_speed = 0;
    this.size = 50;
    this.isFound = false;
    
    this.draw = function(){
        // Draw collectable items
        push();
        translate(this.x_pos,this.y_pos);
        rotate(frameCount * 0.25);
        push();
        fill(255,215,0);
        stroke(236,168,28);
        strokeWeight(5);
        ellipse(0,0,this.size,this.size);
        pop();
        push();
        fill(255,140,0);
        textSize(this.size*66.66/100);
        text("$",0-9,0+10);
        pop();
        pop();
    }
    
    this.move = function(){
        this.x_pos  -= this.move_speed;
    }
    
    this.check_exit_screen = function(){
        if(this.x_pos<-200){
            return true;
        }
        else{
            return false;
        }
    }
    
    this.check_poop_touch = function(X,Y){
        if((X>(this.x_pos-(this.size/2)))&&(X<(this.x_pos-(this.size/2)+this.size))&&
           (Y>(this.y_pos-(this.size/2)))&&(Y<(this.y_pos-(this.size/2)+this.size))){
            return true;
        }
        else{
            return false;
        } 
    }
}