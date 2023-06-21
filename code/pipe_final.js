//A pipe obstacle to be placed in here
let url = "https://agile-bastion-75056.herokuapp.com/api/post";
let inp;
let pointsToSend;

function pipe_draw(){
    
    this.number_of_pipe=[];
    this.pipe_parameter_speed=5;
    this.pipe_parameter_gap=100;
    this.two_pipe_difference=100;
    this.total_point=0;
    this.loop_switch=true;
    this.start_button_mouse_hover_switch=true;
    this.start_button_mouse_pressed_switch=true;
    this.option_button_mouse_hover_switch=true;
    this.option_button_mouse_pressed_switch=true;
    this.start_initial_color=[210,200,140];
    this.game_over_flag = false;
    this.transperent_Boost_Flag = false;
     
    
    function removeparticular(arr, value) 
    {
        var index = arr.indexOf(value);
        arr.splice(index, 1);
        return arr;
    }
    
    this.game_over = function(){
        push();
        stroke('white');
        strokeWeight(10);
        fill(210,200,140);
        rect(250,50,500,430,10,10,10,10);
        push();
        noStroke();
        fill('purple');
        strokeWeight(4);
        textSize(85);
        text("GAME", 365, 180);
        text("OVER", 370, 280);
        textSize(45);
        text("Submit Player Name:",295,370)
        inp =createInput('');
        inp.position(355,400);
        inp.size(250,30);
        inp.style('font-size', '30px');
        inp.style('color','purple');
        inp.style('background-color','yellow');
        //inp.style('border-radius','25px');
        inp.style('text-align','center');
        submitButton = createButton('Nickname Submit');
        submitButton.position(inp.x,inp.y+inp.height+8);
        submitButton.size(inp.width,30);
        submitButton.style('border-radius','25px');
        pointsToSend = this.total_point;
        submitButton.mousePressed(sendData);



        

        
        pop();
        pop();
        noLoop();
    }
    
    this.pipe_setup = function(){
        this.number_of_pipe.push(new pipe_final(this.total_point));
    }
    
    this.pipe_draw_final = function(bird_x,bird_y){
        this.pipe_parameter_speed=overall_game_speed;
        var bird_x_points=[bird_x-25,bird_x,bird_x+25,bird_x+25,bird_x+25,bird_x,bird_x-25];
        var bird_y_points=[bird_y,bird_y-25,bird_y+25,bird_y,bird_y-25,bird_y+25,bird_y+25];
        for(var i=0;i<this.number_of_pipe.length;i++)
        {
            this.number_of_pipe[i].pipe_gap=this.pipe_parameter_gap;
            this.number_of_pipe[i].draw();
            this.number_of_pipe[i].pipe_speed=this.pipe_parameter_speed;
            this.number_of_pipe[i].move();
            for(var p=0;p<bird_x_points.length;p++)
            {
                if(this.number_of_pipe[i].pipe_collide_check(bird_x_points[p],bird_y_points[p],this.transperent_Boost_Flag)){
                    this.game_over_flag = true;
                    this.game_over();
                }
            }
            if(this.number_of_pipe[i].crossed_pipe_for_point(bird_x)){
                this.total_point+=1;
            }
            if(this.number_of_pipe[i].pipe_screen_out_check()){
                removeparticular(this.number_of_pipe, this.number_of_pipe[i]) 
            }
        }
        if(frameCount%this.two_pipe_difference == 0){
            this.number_of_pipe.push(new pipe_final(this.total_point));
        }
//        console.log(this.total_point);
    }
    
    this.draw_score_panel = function(){
            push();
            stroke('purple');
            strokeWeight(2);
            fill(210,200,140);
            rect(10,10,150,40,10,10,10,10);
            push();
            noStroke();
            fill('purple');
            textSize(25);
            text("Score : " + this.total_point, 20, 38);
            pop();
            pop();
    }
    
    this.start_button_color = function(){
            push();
            stroke('purple');
            strokeWeight(5);
            fill(this.start_initial_color);
            rect(420,300,150,40,10,10,10,10);
            push();
            strokeWeight(1);
            fill('black');
            textSize(30);
            text("START", 447, 330);
            pop();
            pop();
    }
    
    this.start_button_hover = function(x,y){
        if(this.start_button_mouse_hover_switch){
            if(x>420 && x<570 && y>300 && y<340){
                this.start_initial_color=[255,255,255];
                this.start_button_color();
            }
            else{
                this.start_initial_color=[210,200,140];
                this.start_button_color();
            }
        }
        if(this.option_button_mouse_hover_switch){
            if(x>width-90 && x<width-90+70 && y>10 && y<10+40){
                this.start_initial_color=[255,255,255];
            }
            else{
                this.start_initial_color=[210,200,140];
            }
        }
    }
    
    this.start_button_mouse_pressed = function(x,y){
        if(x>420 && x<570 && y>300 && y<340){
            if(this.start_button_mouse_pressed_switch){
                this.start_button_mouse_pressed_switch=false;
                this.start_button_mouse_hover_switch=false;
                this.option_button_mouse_hover_switch=true;
                this.option_button_mouse_pressed_switch=true;
                this.start_initial_color=[210,200,140];
                loop();
                
            }
        }
        if(x>width-90 && x<width-90+70 && y>10 && y<10+40){
            if(this.option_button_mouse_pressed_switch){
                this.option_button_mouse_pressed_switch=false;
                this.option_button_mouse_hover_switch=false;
                this.start_initial_color=[210,200,140];
                this.start_button_mouse_hover_switch=true;
                this.start_button_mouse_pressed_switch=true;
                this.loop_switch=true;
            }
        }
    }
    
    this.start_button_no_loop = function(){
        if(this.loop_switch){
            push();
            stroke('white');
            strokeWeight(10);
            fill(210,200,140);
            rect(250,100,500,300,10,10,10,10);
            push();
            noStroke();
            fill('purple');
            textSize(25);
            text("Press '<-' arrow to move left", 340, 150);
            text("Press '->' arrow to move right", 340, 190);
            text("Press space-bar to jump", 340, 230);
            text("Press 'N' to poop & collect points", 340, 270);
            pop();
            pop();
            this.start_button_color();
            this.loop_switch=false;
            noLoop();
        }
    }
    
    this.draw_option_button = function(){
        push();
        stroke('purple');
        strokeWeight(5);
        fill(this.start_initial_color);
        rect(width-90,10,70,40,10,10,10,10);
        push();
        strokeWeight(1);
        fill('black');
        textSize(25);
        text("ESC", width-100+20, 40);
        pop();
        pop();
    }
    
}

function pipe_final(current_score_for_pipe){
    
    this.initial_x=1200;
    this.initial_y=random(180,480);
    this.initial_width=100;
    this.initial_height=300;
    this.pipe_gap=0;
    this.pipe_speed=0;
    this.point_gained=true;
    this.current_score_for_pipe=current_score_for_pipe;
    
    this.draw = function(){
    if(this.current_score_for_pipe<score_level_1){
        image(pipe_img_1 ,this.initial_x    ,this.initial_y+this.pipe_gap    ,this.initial_width ,this.initial_height );
        image(pipe_img_3 ,this.initial_x    ,this.initial_y+300+this.pipe_gap,this.initial_width ,this.initial_height );
        image(pipe_img_4 ,this.initial_x+100,this.initial_y-150-300          ,-this.initial_width,-this.initial_height);
        image(pipe_img_2 ,this.initial_x+100,this.initial_y-150              ,-this.initial_width,-this.initial_height);
    }
        
    else if(this.current_score_for_pipe>=score_level_1 && this.current_score_for_pipe<=score_level_2){
        image(pipe_img_6 ,this.initial_x    ,this.initial_y+this.pipe_gap    ,this.initial_width ,this.initial_height );
        image(pipe_img_7 ,this.initial_x    ,this.initial_y+300+this.pipe_gap,this.initial_width ,this.initial_height );
        image(pipe_img_8 ,this.initial_x+100,this.initial_y-150-300          ,-this.initial_width,-this.initial_height);
        image(pipe_img_5 ,this.initial_x+100,this.initial_y-150              ,-this.initial_width,-this.initial_height);
    }   
    else if(this.current_score_for_pipe>score_level_2){
        image(pipe_img_9 ,this.initial_x    ,this.initial_y+this.pipe_gap    ,this.initial_width ,this.initial_height );
        image(pipe_img_12,this.initial_x    ,this.initial_y+300+this.pipe_gap,this.initial_width ,this.initial_height );
        image(pipe_img_11,this.initial_x+100,this.initial_y-150-300          ,-this.initial_width,-this.initial_height);
        image(pipe_img_10,this.initial_x+100,this.initial_y-150              ,-this.initial_width,-this.initial_height);
    }
        
    }
    
    this.move = function(){
        this.initial_x=this.initial_x-this.pipe_speed;
    }
    
    this.pipe_collide_check = function(x,y,boost_flag){
        if(boost_flag == true)
            return false;
        if((x>this.initial_x)&&(x<(this.initial_x+this.initial_width))&&
           ((y>this.initial_y+this.pipe_gap)||(y<this.initial_y-150)))
        {
           return true;
        }
        else{
            return false;
        }
    }
    
    this.pipe_screen_out_check = function(){
        if(this.initial_x<-300){
           return true;
        }
        else{
            return false;   
        }
    }
    
    this.crossed_pipe_for_point = function(x){
        if(this.point_gained && (x>(this.initial_x+this.initial_width))){
            this.point_gained=false;
            return true;
        }
    }
    
}

function sendData()
{
    let postData = { name: inp.value(), score: pointsToSend};

        console.log("game over");
        httpPost(url, 'json', postData, function(response){
            console.log("data entered");
        });
}