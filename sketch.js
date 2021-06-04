var database , game1 , gameState = 0 , playerCount , form1 , player1, allPlayers , car1 , car2 , car3 , car4 , cars; 
var car1Img , car2Img , car3Img , car4Img , trackImg;


function preload() {
 car1Img = loadImage("images/car1.png");
 car2Img = loadImage("images/car2.png");
 car3Img = loadImage("images/car3.png");
 car4Img = loadImage("images/car4.png");
 trackImg = loadImage("images/track.jpg");
}


function setup(){
    createCanvas(displayWidth-50,displayHeight-50);
    database = firebase.database();
    game1 = new game();
     game1.gameState();
     game1.start();
}

function draw(){
    background("white");
    if(playerCount === 4) {
        game1.update(1);    
    }
    
   if(gameState === 1) {
       game1.play();
   } 

   if(gameState === 2) {
       game1.end();
   }
}


