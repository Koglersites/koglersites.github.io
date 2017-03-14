
function Player(x, y, sprite, speed, dir, collisionBox, cooldown, hp) {
    Mob.call(this, x, y, 1, sprite, speed, dir, collisionBox, cooldown, hp);

    var anim = 0;
    var walking = false;

    this.projectileList = {

        list: [],
        update: function() {
            //checking for collision and act correspondingly
            for (var i = 0; i < this.list.length; i++) {
                if (this.list[i].tileCollision(this.list[i].posx + (this.list[i].xa * this.list[i].speed), this.list[i].posy +
                        (this.list[i].ya * this.list[i].speed))) {
                    this.list.splice(i, 1);
                } else if(this.list[i].enemyCollision(this.list[i].posx + (this.list[i].xa * this.list[i].speed), this.list[i].posy +
                        (this.list[i].ya * this.list[i].speed))) {
                    this.list[i].enemyCollision(this.list[i].posx + (this.list[i].xa * this.list[i].speed), this.list[i].posy +
                        (this.list[i].ya * this.list[i].speed)).currhp -= player.dmg;
                    this.list.splice(i, 1);
                }
                else this.list[i].updateProjectilePos();
            }
        },

        render: function(){
            //render all current projectiles
            for(var i = 0; i < this.list.length; i++){
                this.list[i].sprite.drawSprite(this.list[i].screenPosx, this.list[i].screenPosy);
            }
        }

    };

    this.render = function() {

        //render the Character accordingly to the direction he is facing
        if(this.dir == 1) {
          this.sprite = playerUp;
          if(walking){
              if(anim % 20 < 10) this.sprite = playerUp2;
              else this.sprite = playerUp1;
          }
        } else if(this.dir == 2) {
            this.sprite = playerRight;
            if(walking){
                if(anim % 20 < 10) this.sprite = playerRight2;
                else this.sprite = playerRight1;
            }
        } else if(this.dir == 3) {
            this.sprite = playerDown;
            if(walking){
                if(anim % 20 < 10) this.sprite = playerDown2;
                else this.sprite = playerDown1;
            }
        } else if(this.dir == 4) {
            this.sprite = playerLeft;
            if(walking){
                if(anim % 20 < 10) this.sprite = playerLeft2;
                else this.sprite = playerLeft1;
            }
        }
        this.sprite.drawSprite(this.screenPosx, this.screenPosy);

    };

    this.action = function(sdir) {
        //check if you can shoot again and create a new Projectile
        if(this.cooldown <= 0){
            if (sdir == 1) {
                if (this.dir == 3) return;
                else {
                    this.projectileList.list.push(new Projectile(this.posx, this.posy - this.collisionBox.y, 1,
                        upArrow, 5, sdir, new CollisionBox(5, 10, 10, 25)));
                    this.cooldown = this.maxCooldown;
                }
            } else if (sdir == 2) {
                if (this.dir == 2) return;
                else {
                    this.projectileList.list.push(new Projectile(this.posx - this.collisionBox.x, this.posy, 1,
                        leftArrow, 5, sdir, new CollisionBox(5, 10, 10, 25)));
                    this.cooldown = this.maxCooldown;
                }
            } else if (sdir == 3) {
                console.log(this.dir);
                if (this.dir == 1) return;
                else {
                    this.projectileList.list.push(new Projectile(this.posx, this.posy - this.collisionBox.y + this.collisionBox.h, 1,
                        downArrow, 5, sdir, new CollisionBox(5, 10, 10, 25)));
                    this.cooldown = this.maxCooldown;
                }
            } else if (sdir == 4) {
                if (this.dir == 4) return;
                else {
                    this.projectileList.list.push(new Projectile(this.posx - this.collisionBox.x + this.collisionBox.w, this.posy, 1,
                        rightArrow, 5, sdir, new CollisionBox(5, 10, 10, 25)));
                    this.cooldown = this.maxCooldown;
                }
            }

        }
    };

    this.move = function(xp, yp){
        //check if you can move to your desired location
        if(level.getTile(this.posx, this.posy).harmful) this.currhp -= level.getTile(this.posx, this.posy).dmg;
        if (!this.tileCollision(this.posx + (xp * this.speed), this.posy + (yp * this.speed)))
            player.updatePlayerPos(xp, yp);
        else if(!this.tileCollision(this.posx + (xp * this.speed), this.posy))
            player.updatePlayerPos(xp, 0);
        else if(!this.tileCollision(this.posx, this.posy + (yp * this.speed)))
            player.updatePlayerPos(0, yp);

        if(player.enemyCollision(this.posx + (xp * this.speed), this.posy + (yp * this.speed)))
            this.currhp -= 1;


    };

    this.updatePlayerPos = function(x, y){
        this.screenPosx += (x * this.speed);
        this.screenPosy += (y * this.speed);
        this.posx = this.screenPosx + sprite.size/2;
        this.posy = this.screenPosy + sprite.size/2;

        if(anim < 7500) anim++;
        else anim = 0;

        if(x != 0 || y != 0) walking = true;
        else walking = false;

        this.cooldown--;

        if(y < 0){
          this.dir = 1;
        } else if(x > 0){
          this.dir = 2;
        } else if(y > 0){
          this.dir = 3;
        } else if(x < 0){
          this.dir = 4;
        }


    };
};