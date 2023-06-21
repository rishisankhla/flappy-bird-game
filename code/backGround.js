//Background related functions to create background objects
//Taking canvasWidth parameter from the main sketch

function drawClouds(scrollPos, locdiff, canvasWidth){
    var cloudLoc = -200;
    var remainder = 300;
        
    fill(255, 255, 255);
        
    remainder = scrollPos % (canvasWidth*2)
    cloudLoc = scrollPos - remainder + locdiff;
        
 	ellipse(-cloudLoc+ canvasWidth,100,120,42);
	ellipse(-cloudLoc-50+ canvasWidth,125,120,42);
	ellipse(-cloudLoc+50+ canvasWidth,125,120,42);
	ellipse(-cloudLoc+20+ canvasWidth,135,120,42);                
}   
    

function drawBricks(scrollPos, locdiff, canvasWidth){
    var brickLoc = -200;
    var remainder = 0;

        
    remainder = scrollPos % (canvasWidth);
    brickLoc = scrollPos - remainder + locdiff;
    
    bricks_img.resize(canvasWidth, 20);
    image(bricks_img, -brickLoc, 6*height/7, bricks_img.width, bricks_img.height);               
}   
    
 
function drawBuildings(scrollPos, locdiff, canvasWidth){
    var buildingLoc = -200;
    var remainder = 0;
        
    remainder = scrollPos % (canvasWidth);
    buildingLoc = scrollPos - remainder + locdiff;
    
    buildings_img.resize(canvasWidth, 50);
    image(buildings_img, -buildingLoc, 5.49*height/7, buildings_img.width, buildings_img.height);               
}   


function drawBackground(canvasWidth){
    drawClouds(scrollPos, 0, canvasWidth);
    drawClouds(scrollPos, -canvasWidth, canvasWidth);
    drawClouds(scrollPos, +canvasWidth, canvasWidth);
    drawBuildings(scrollPos, 0, canvasWidth);
    drawBuildings(scrollPos, canvasWidth, canvasWidth);
    drawBuildings(scrollPos, -canvasWidth, canvasWidth);
    drawBricks(scrollPos, 0, canvasWidth);
    drawBricks(scrollPos, canvasWidth, canvasWidth);
    drawBricks(scrollPos, -canvasWidth, canvasWidth);
}