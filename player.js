class player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
    }

    getCount() {
        var playerCountref = database.ref('playerCount');
        playerCountref.on("value" , function(data){
            playerCount = data.val();
        })
    }

    updateCount(count) {
     database.ref('/').update({
         playerCount : count
     })
    }

    update() {
        var index1 = "players/player" + this.index;
        database.ref(index1).set({
            name : this.name ,
        distance : this.distance  
        })
    }
                
    static getPlayerInfo() {
        var playerInfoRef = database.ref("players");
        playerInfoRef.on("value" , (data)=>{
        allPlayers = data.val();
        })
    }
}