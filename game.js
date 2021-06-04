class game {
    constructor() {

    }

    gameState() {
        var gameStateref = database.ref('gameState');
        gameStateref.on("value" , function(data) {
            gameState = data.val();
        })
    }

    update(state) {
      database.ref('/').update({
          gameState : state 
      })
    }

  async  start() {
        if(gameState === 0) {
             player1 = new player();
             var playerCountref1 = await database.ref('playerCount').once("value");
             if(playerCountref1.exists()){
                 playerCount = playerCountref1;
                 player1.getCount();
             }
            
             form1 = new form();
            form1.display();
        }
      car1 = createSprite(100,200);
      car1.addImage(car1Img);

      car2 = createSprite(300,200);
      car2.addImage(car2Img);

      car3 = createSprite(500,200);
      car3.addImage(car3Img);

      car4 = createSprite(700,200);
      car4.addImage(car4Img);

      cars = [car1,car2,car3,car4];

    }

    play() {
        form1.hide();
        player.getPlayerInfo();
        if(allPlayers !== undefined) {
            background(rgb(198,135,103));
       image(trackImg,0,-displayHeight*4,displayWidth,displayHeight*5);
        var index1 = 0;
        var x = 175;
        var y = 0;
        for(var pal  in allPlayers){
            x = x+200;
            y = displayHeight - allPlayers[pal].distance;
            cars[index1].x=x;
            cars[index1].y=y;
            index1 +=1;  
            if(index1 === player1.index){
                cars[index1 - 1].shapeColor = "red";
            camera.position.x = displayWidth/2;
            camera.position.y = cars[index1 -1].y;
            }    
        }
        }
        if(keyDown(UP_ARROW) && player1.index !== null)     {
         player1.distance += 10;
        player1.update();
        }  
      if(player1.distance>=3860){
          gameState === 2    
      }  
      console.log(displayHeight);
        drawSprites();
    }

    end() {
        console.log("gameEnded");
    }
}