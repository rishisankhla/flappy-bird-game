//bird jump logic variables

function bird_jump_logic(){
    if(bird_jump_buffer!=0)
    {
        bird_y-=(30*bird_jump_strength);
        bird_jump_buffer-=1;
    }
    if(keyIsDown(LEFT_ARROW)){
        bird_x -=10;
    }
    else if(keyIsDown(RIGHT_ARROW)){
        bird_x +=10;
    }
    if(bird_y>height){
        bird_y=height;
    }
    else if(bird_y<0){
        bird_y=0;
    }
    if(bird_x>width){
        bird_x=width;
    }
    else if(bird_x<0){
        bird_x=0;
    }
    bird_y+=(15*bird_gravity);
}




