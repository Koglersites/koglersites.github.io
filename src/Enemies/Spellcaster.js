
// the greater the difficulty the more fireballs he can shoot at once
function Spellcaster(x, y, dmg, speed, dir, collisionBox, cooldown, hp){

    if(dir == 1 || dir == 3){
        Enemy.call(this, x, y, dmg, spellcaster1, speed, dir, collisionBox, cooldown, hp);
    } else Enemy.call(this, x, y, dmg, spellcaster2, speed, dir, collisionBox, cooldown, hp);


    this.weight = 2;
    this.action = function() {
        if(this.cooldown <= 0){
            if(player.posx < this.posx){
                this.dir = 2;
            } else this.dir = 4;

            for(var i = 0; i < level.difficulty; i++){
                this.projectileList.list.push(new Projectile(this.posx , this.posy+ (i * 5  * this.speed), this.dmg,
                    fire, 15, this.dir, new CollisionBox(10, 20, 10, 35)));
                this.cooldown = this.maxCooldown;
            }
            if(player.posy < this.posy){
                this.dir = 1;
            } else this.dir = 3;
            for(var i = 0; i < level.difficulty; i++){
                this.projectileList.list.push(new Projectile(this.posx+ (i * 5  * this.speed), this.posy, this.dmg,
                    fire, 15, this.dir, new CollisionBox(10, 20, 10, 35)));
                this.cooldown = this.maxCooldown;
            }
        }

        this.cooldown--;
        this.projectileList.update();
    };

};