
var canvas;
var ctx;
var player;
var level;
var status;
window.onload = function() {
    canvas = document.getElementById("game");
    ctx = canvas.getContext("2d");

    canvas.width = 1280;
    canvas.height = canvas.width * (9 / 16);

    status = 0;

    window.requestAnimationFrame(update);
};

function update() {

    window.requestAnimationFrame(update);
    if(status == 0){ //start screen
        player = new Player(canvas.width/2 - 64, canvas.height/2 - 64, playerUp, 5, 1,
            new CollisionBox(16,32,0,52), 20, 100);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0,  canvas.width, canvas.height);

        var img = new Image();
        img.src = "../res/tower.png";
        ctx.drawImage(img, canvas.width / 2 - 128, canvas.height/2 - 268);
        ctx.font = "40px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Welcome to the Tower of Babel ", canvas.width/2, canvas.height/2);
        ctx.fillText("Press Enter to climb", canvas.width/2, canvas.height - 75);
        ctx.fillStyle = "black";
        ctx.strokeText("Welcome to the Tower of Babel ", canvas.width/2, canvas.height/2);
        ctx.strokeText("Press Enter to climb", canvas.width/2, canvas.height - 75);

        if (Key.isDown(Key.ENTER)){
            status = 1;
        }
    }else if(status == 1){ //building the first level

        level = new Level(tileWood, tileBrickWall, 3, 1);

        level.generateLevel();
        status = 2;
    }
    else if(status == 2){ //clearing Floor
        movement();
        if(player.currhp <= 0) status = 4;

        for(var i = 0; i < level.enemyset.length; i++){
            if(level.enemyset[i].currhp <= 0) {
                level.enemyset.splice(i, 1);
            }
        }

        if(level.enemyset.length <= 0){
            status = 3;
            level.spawnDoor();
        }

        render();

    } else if(status == 3){ //Floor cleared
        movement();
        render();
        if(level.getTile(player.posx, player.posy) == tileDoor){
            var newWeight =  level.maxweight + 1;
            var newDiff = level.difficulty + 1;
            if(level.difficulty >= 4)
                level = new Level(tileWood, tileStoneWall, newWeight, newDiff);
            else
                level = new Level(tileStoneFloor, tileBookWall,newWeight, newDiff);
            player.posx = canvas.width/2;
            player.posy = canvas.height/2;
            player.screenPosx = player.posx - player.sprite.size/2;
            player.screenPosy = player.posy - player.sprite.size/2;
            level.generateLevel();
            status = 2;
            console.log(status);
        }
    } else if(status == 4) { //Game Over
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        let img = new Image();
        img.src = "../res/tower.png";
        ctx.drawImage(img, canvas.width / 2 - 128, canvas.height / 2 - 268);
        ctx.font = "40px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("You failed me. Try climbing the Tower again", canvas.width / 2, canvas.height / 2);
        ctx.fillText("Press Enter to climb", canvas.width / 2, canvas.height - 75);

        ctx.fillStyle = "black";
        ctx.strokeText("You failed me. Try climbing the Tower again", canvas.width / 2, canvas.height / 2);
        ctx.strokeText("Press Enter to climb", canvas.width / 2, canvas.height - 75);
        if (Key.isDown(Key.ENTER)) document.location.reload();


    }

};

function movement(){
    var xp = 0;
    var yp = 0;
    if (Key.isDown(Key.WALKUP)) yp--;
    if (Key.isDown(Key.WALKLEFT)) xp--;
    if (Key.isDown(Key.WALKDOWN)) yp++;
    if (Key.isDown(Key.WALKRIGHT)) xp++;

    if(Key.isDown(Key.SHOOTUP)) player.action(1);
    if(Key.isDown(Key.SHOOTLEFT)) player.action(2);
    if(Key.isDown(Key.SHOOTDOWN)) player.action(3);
    if(Key.isDown(Key.SHOOTRIGHT)) player.action(4);

    player.move(xp, yp);

    player.projectileList.update();
    for(var i = 0; i < level.enemyset.length; i++){
        level.enemyset[i].action();
    }
}

function render() {

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    level.render();
    // Draw UI

    heart.drawSprite(30, 665);
    ctx.fillStyle = "green";
    ctx.fillRect(65, 670, (200/player.maxhp) * player.currhp, 15);

    ctx.fillStyle = "red";
    ctx.fillRect(65 + (200/player.maxhp) * player.currhp, 670, (200/player.maxhp * (player.maxhp - player.currhp)), 15);

    ctx.rect(65,670, 200, 15);
    ctx.stroke();

    ctx.font = "40px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Floor " + level.difficulty, 1100, 690);
    // --------------

    player.render();
    player.projectileList.render();
    for(var i=0; i < level.enemyset.length; i++)
        level.enemyset[i].projectileList.render();
}