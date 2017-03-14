
//a floating Eye that shoot a gooey fluid
//it shoots faster if the difficulty is higher
function Spitter(x, y, dmg, speed, dir, collisionBox, cooldown, hp){

    if(dir == 1){
        Enemy.call(this, x, y, dmg, spitter1, speed, dir, collisionBox, cooldown, hp);
    } else Enemy.call(this, x, y, dmg, spitter2, speed, dir, collisionBox, cooldown, hp);


    this.weight = 1;
    this.action = function() {

        if(this.cooldown <= 0){
            if (this.dir == 1) {
                this.projectileList.list.push(new Projectile(this.posx, this.posy - this.collisionBox.y, this.dmg,
                    blobb, 15, 2, new CollisionBox(5, 10, 10, 25)));
                this.cooldown = this.maxCooldown;

            } else if (this.dir == 2) {
                this.projectileList.list.push(new Projectile(this.posx - this.collisionBox.x, this.posy, this.dmg,
                    blobb, 15, 4, new CollisionBox(5, 10, 10, 25)));
                this.cooldown = this.maxCooldown;

            }
        }

        if(this.dir == 1){
            if(this.tileCollision(this.posx, this.posy - this.speed)){
                this.dir = 2;
            }
            else{
                this.screenPosy -= this.speed;
                this.posy = this.screenPosy + this.sprite.size/2;
            }
        } else{
            if(this.tileCollision(this.posx, this.posy + this.speed)){
                this.dir = 1;
            }
            else{
                this.screenPosy += this.speed;
                this.posy = this.screenPosy + this.sprite.size/2;
            }
        }
        this.cooldown--;
        this.projectileList.update();
    };

};