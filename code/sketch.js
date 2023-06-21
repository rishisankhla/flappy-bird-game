// The improved Flappy Bird game

var floorPos;
var scrollPos;
var flappySpeed;

//objects for the background
var buildings;
var clouds;
var grass;
var bricks_img;
var buildings_img;

var canvasWidth;
var canvasHeight;

var pointsBoost;
var transperentBoost;

///////////////////rishi-code-start///////////////////////
var pipe_img_1;
var pipe_img_2;
var pipe_img_3;
var pipe_img_4;
var pipe_img_5;
var pipe_img_6;
var pipe_img_7;
var pipe_img_8;
var pipe_img_9;
var pipe_img_10;
var pipe_img_11;
var pipe_img_12;
var draw_all_pipe;
//var pipe_parameter_speed=5;
//var pipe_parameter_gap=0;
var bird_x;
var bird_y;
var bird_jump_buffer;
var bird_gravity;
var bird_jump_strength;
var music_started = false;
var music_game_over = false;
var score_up;
var score_level_1;
var score_level_2;


var pointsBooster1 = [];

var transBooster = [];
var boostElem1 = true;
var boostElem2 = true;

var timer = 5;

var poop;
var poop_coin_final;
var overall_game_speed;
var boost_point_collected;
var poop_sound;

var background_2;
///////////////////rishi-code-end///////////////////////

function preload(){ 

    soundFormats('wav', 'mp3');
    soundSystem = new GameMusic();
    soundSystem.gameSound1 = loadSound("game_assets/sound/mixkit-bubbly-achievement-tone-3193.wav");
    soundSystem.gameSound2 = loadSound("game_assets/sound/mixkit-game-level-music-689.wav");
    soundSystem.gameSound3 = loadSound("game_assets/sound/mixkit-player-losing-or-failing-2042.wav");
    soundSystem.gameSound4 = loadSound("game_assets/sound/mixkit-quick-jump-arcade-game-239.wav");

    bricks_img = loadImage('game_assets/bricks.png'); //Loading game assets
    buildings_img = loadImage('game_assets/buildings.png'); 

    ////////////////////boosts//////////////////////////////////
    pointsBoost = loadImage("game_assets/boosts/points_boost.png");
    transperentBoost = loadImage("game_assets/boosts/transperent_bird_boost.png");
    ///////////////////rishi-code-start///////////////////////
    pipe_img_1 = loadImage('game_assets/pipe/pipes.png'); 
    pipe_img_2 = loadImage('game_assets/pipe/pipes_reverse.png'); 
    pipe_img_3 = loadImage('game_assets/pipe/pipes_pipe.png');
    pipe_img_4 = loadImage('game_assets/pipe/pipes_reverse_pipe.png');
    pipe_img_5 = loadImage('game_assets/pipe/new_pipe/obj-2.1.png'); 
    pipe_img_6 = loadImage('game_assets/pipe/new_pipe/obj-2.2.png'); 
    pipe_img_7 = loadImage('game_assets/pipe/new_pipe/obj-2.2 - Copy.png'); 
    pipe_img_8 = loadImage('game_assets/pipe/new_pipe/obj-2.1 - Copy.png');
    pipe_img_9 = loadImage('game_assets/pipe/new_pipe_1/obj-3.1.png'); 
    pipe_img_10= loadImage('game_assets/pipe/new_pipe_1/obj-3.2.png'); 
    pipe_img_11= loadImage('game_assets/pipe/new_pipe_1/obj-3.2 - Copy.png');
    pipe_img_12= loadImage('game_assets/pipe/new_pipe_1/obj-3.1 - Copy.png');
    
    poop = loadImage('game_assets/poop/p (1).jpg');
    poop_sound = loadSound('game_assets/sound/poop.wav');
    poop_sound.setVolume(0.3);
    ///////////////////rishi-code-end///////////////////////
    
    bird = new birdskin1();
    for(var i = 0; i < 9 ; i++)
        bird.spriteVector[i] = loadImage("game_assets/bird/parrot"+str(i+1)+".png");
    bird2 = new birdskin1();
        for(var i = 0; i < 9 ; i++)
            bird2.spriteVector[i] = loadImage("game_assets/bird/green"+str(i+1)+".png");
    bird3 = new birdskin1();
        for(var i = 0; i < 9 ; i++)
            bird3.spriteVector[i] = loadImage("game_assets/bird/grey"+str(i+1)+".png");
}


function setup(){
    frameRate(bird.frameR);
    bird.BirdSetupPos();
    
    ///////////////////rishi-code-start///////////////////////
    bird_x=500;
    bird_y=200;
    bird_jump_buffer=0;
    bird_jump_strength=1;
    bird_gravity=1;
    overall_game_speed=5;
    draw_all_pipe = new pipe_draw();
    draw_all_pipe.pipe_setup();
    score_level_1=10;
    score_level_2=30;
    
    background_2 = new background_2();
    
    poop_coin_final = new poop_main_logic();
    boost_point_collected=5;
    ///////////////////rishi-code-end///////////////////////
    
    canvasWidth = 1024;
    canvasHeight = 576;
	createCanvas(canvasWidth, canvasHeight);
    floorPos = height * 6/7;
    flappySpeed = 2;                 //To be changed according to game mechanics
    scrollPos = 0;
    score_up = draw_all_pipe.total_point;
    
    //pointsBooster1.push(new BoostPoints(random(2000,2500),random(100,400),50,pointsBoost)) ;
   // transBooster.push(new BoostTransperernt(random(2000,2500),random(100,400),50,transperentBoost)) ;

}


function draw(){
    

    if(draw_all_pipe.start_button_mouse_pressed_switch ==false && music_started == false)
    {
        soundSystem.loopSound2()
        soundSystem.playSound2()
        music_started = true;
    }
    
    background(80, 190, 200);                   // bluish sky

    noStroke();
	fill(210,200,140);
	rect(0, floorPos, width, height/7);      // ground colour
    
    if(draw_all_pipe.total_point<score_level_1){
        scrollPos -= flappySpeed;
        push();
        translate(scrollPos, 0);
        drawBackground(canvasWidth);
        pop();
    } 
    else if(draw_all_pipe.total_point>=score_level_1 && draw_all_pipe.total_point<=score_level_2){
        background_2.draw();
    }   
    else if(draw_all_pipe.total_point>score_level_2){
        scrollPos -= flappySpeed;
        push();
        translate(scrollPos, 0);
        drawBackground(canvasWidth);
        pop();
    }

    
    
    if(boostElem1 == false )
    {
        if(pointsBooster1[0].collision(bird_x,bird_y,bird.birSize-50))
        {
            draw_all_pipe.total_point+=boost_point_collected;
            pointsBooster1.splice(0,1);
            boostElem1 = true;
        }
        else if(pointsBooster1[0].collided == false)
            pointsBooster1[0].draw();
    }
    if(boostElem2 == false )
    {
        if(transBooster[0].collision(bird_x,bird_y,bird.birSize-50))
        { 
            transBooster[0].CancelPipeColission = true;
            draw_all_pipe.transperent_Boost_Flag = true;
        }
        else if(transBooster[0].collided == false)
            transBooster[0].draw();
        
        if(transBooster[0].CancelPipeColission == true)
        {
           
            if (frameCount % 60 == 0 && transBooster[0].timer > 0)
                transBooster[0].timer -=1;

            else if(transBooster[0].timer == 0)
            {
                noTint();
                boostElem2 = true;
                draw_all_pipe.transperent_Boost_Flag = false;
                transBooster.splice(0,1);
            }
        }
    }

    if((pointsBooster1.length==0)&&(frameCount % 500 == 0)){
        pointsBooster1.push(new BoostPoints(random(100,width-100),random(100,400),50,pointsBoost));
        boostElem1 = false;
    }

    if((transBooster.length==0)&&(frameCount % 800 == 0)){
        transBooster.push(new BoostTransperernt(random(100,width-100),random(100,400),50,transperentBoost));
        boostElem2 = false;
    }

    
//    console.log(frameCount);
//    draw_obstacles.draw();
//    console.log(draw_obstacles.draw);
    ///////////////////rishi-code-start///////////////////////

    if(draw_all_pipe.transperent_Boost_Flag == true)
    {
        push();
        tint(255, 126);
    }
    if(draw_all_pipe.total_point<score_level_1){
        bird.spriteanimation(bird_x,bird_y);
        draw_all_pipe.pipe_parameter_gap=150;
        overall_game_speed=5;
        draw_all_pipe.two_pipe_difference=100;
        poop_coin_final.two_coin_difference=100;
        poop_coin_final.poop_final_falling_speed=20;
        
    }
        
    else if(draw_all_pipe.total_point>=score_level_1 && draw_all_pipe.total_point<=score_level_2){
        bird2.spriteanimation(bird_x,bird_y);
        draw_all_pipe.pipe_parameter_gap=100;
        overall_game_speed=10;
        draw_all_pipe.two_pipe_difference=50;
        poop_coin_final.two_coin_difference=50;
        poop_coin_final.poop_final_falling_speed=30;
    }   
    else if(draw_all_pipe.total_point>score_level_2){
        bird3.spriteanimation(bird_x,bird_y);
        draw_all_pipe.pipe_parameter_gap=75;
        overall_game_speed=15;
        draw_all_pipe.two_pipe_difference=30;
        poop_coin_final.two_coin_difference=30;
        poop_coin_final.poop_final_falling_speed=40;
    }
    if(draw_all_pipe.transperent_Boost_Flag == true)
        pop();
    if(transBooster.length != 0)
    {
       console.log(transBooster[0].CancelPipeColission);
       console.log( transBooster[0].timer) ;  
    }
        

//    stroke('purple');
//    strokeWeight(10);
//    point(bird_x-25, bird_y-25);
//    point(bird_x-25, bird_y);
//    point(bird_x, bird_y-25);
//    point(bird_x+25, bird_y+25);
//    point(bird_x+25, bird_y);
//    point(bird_x+25, bird_y-25);
//    point(bird_x, bird_y+25);
//    point(bird_x-25, bird_y+25);
    
   
    draw_all_pipe.pipe_draw_final(bird_x,bird_y);
    
    draw_all_pipe.start_button_no_loop();
    if(draw_all_pipe.game_over_flag == true && music_game_over == false)
    {
        soundSystem.PauseloopSound2();
        soundSystem.stopSound2();
        soundSystem.playSound3();
        music_game_over= true;
    } 
    draw_all_pipe.draw_score_panel();
    if(score_up != draw_all_pipe.total_point)
        {
            soundSystem.playSound1();
            score_up = draw_all_pipe.total_point;
        }
    draw_all_pipe.draw_option_button();
    bird_jump_logic();
    
    poop_coin_final.draw(overall_game_speed);
    
    if(poop_coin_final.point_collected){
        draw_all_pipe.total_point*=2;
        poop_coin_final.point_collected=false;
    }
    ///////////////////rishi-code-end///////////////////////
}


function keyPressed(){
    
    ///////////////////rishi-code-start///////////////////////
    if (keyCode== 32){
      bird_jump_buffer=5;
      soundSystem.playSound4()
    }
    if(keyCode== 27){
        draw_all_pipe.start_button_hover(width-80,20);
    }
    
    poop_coin_final.keyPressed(bird_x-20,bird_y+25);
    ///////////////////rishi-code-end///////////////////////
}

function keyReleased(){
    
    ///////////////////rishi-code-start///////////////////////
    if(keyCode== 27){
        draw_all_pipe.start_button_mouse_pressed(width-80,20);
    }
    ///////////////////rishi-code-end///////////////////////
}

function mousePressed(){
    
    ///////////////////rishi-code-start///////////////////////
    draw_all_pipe.start_button_mouse_pressed(mouseX,mouseY);
    ///////////////////rishi-code-end///////////////////////
}

function mouseMoved(){
    
    ///////////////////rishi-code-start/////////////////////// 
    draw_all_pipe.start_button_hover(mouseX,mouseY);
    ///////////////////rishi-code-end///////////////////////
}


