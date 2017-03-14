function Entity(x, y, dmg, sprite, speed, dir, collisionBox){

    this.collisionBox = collisionBox;

    this.sprite = sprite;
    this.screenPosx = x;
    this.screenPosy = y;
    this.posx = this.screenPosx + this.sprite.size/2;
    this.posy = this.screenPosy + this.sprite.size/2;
    this.speed = speed;
    this.dmg = dmg;
    this.dir = dir;


    //basic Entity checks if it collides with a tile, player or enemy
    this.tileCollision = function(x, y){
        if(level.getTile(x - this.collisionBox.x, y).solid ||
            level.getTile(x - this.collisionBox.x + this.collisionBox.w, y).solid ||
            level.getTile(x, y - this.collisionBox.y).solid ||
            level.getTile(x, y - this.collisionBox.y + this.collisionBox.h).solid) return true;

        else return false;
    };

    this.playerCollision = function(x, y){
        if(x >= player.posx - player.collisionBox.x  &&
           x <= player.posx - player.collisionBox.x + player.collisionBox.w &&
           y >= player.posy - player.collisionBox.y  &&
           y <= player.posy - player.collisionBox.y + player.collisionBox.h) return true;
        else return false;

    };

    this.enemyCollision = function(x, y){
        for(var i = 0; i < level.enemyset.length; i++){
            if(x >= level.enemyset[i].posx - level.enemyset[i].collisionBox.x  &&
                x <= level.enemyset[i].posx - level.enemyset[i].collisionBox.x + level.enemyset[i].collisionBox.w &&
                y >= level.enemyset[i].posy - level.enemyset[i].collisionBox.y  &&
                y <= level.enemyset[i].posy - level.enemyset[i].collisionBox.y + level.enemyset[i].collisionBox.h) {
                return level.enemyset[i];
            }

        }
        return false;

    }
};