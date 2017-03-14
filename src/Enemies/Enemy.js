function Enemy(x, y, dmg, sprite, speed, dir, collisionBox, cooldown, hp){
    Entity.call(this, x, y, dmg, sprite, speed, dir, collisionBox);

    this.maxhp = hp;
    this.currhp = hp;
    this.maxCooldown = cooldown;
    this.cooldown = cooldown;

    this.projectileList = {
        list: [],
        update: function() {
            for (var i = 0; i < this.list.length; i++) {
                if (this.list[i].tileCollision(this.list[i].posx + (this.list[i].xa * this.list[i].speed), this.list[i].posy +
                        (this.list[i].ya * this.list[i].speed))) {
                    this.list.splice(i, 1);
                } else if(this.list[i].playerCollision(this.list[i].posx + (this.list[i].xa * this.list[i].speed), this.list[i].posy +
                        (this.list[i].ya * this.list[i].speed))) {
                    player.currhp -= this.list[i].dmg;
                    this.list.splice(i, 1);
                }
                else this.list[i].updateProjectilePos();
            }
        },


        render: function(){
            for(var i = 0; i < this.list.length; i++){
                this.list[i].sprite.drawSprite(this.list[i].screenPosx, this.list[i].screenPosy);
            }
        }
    };

};