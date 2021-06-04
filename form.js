class form {
    constructor() {
     this.input = createInput("Name");
     this.greeting = createElement("h4");
     this.button = createButton("play");
    }

    hide(){
       this.input.hide();
       this.button.hide();
       this.greeting.hide();
    }

    display() {

        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(displayWidth - displayWidth/3,90);

        this.input.position(600,250);

        this.button.position(750,300);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            
            player1.name = this.input.value();

            this.greeting.html("Welcome " + player1.name);
            this.greeting.position(620,300);

            playerCount = playerCount +1;
            player1.index = playerCount;
            player1.update();
            player1.updateCount(playerCount);
        })
    }
}