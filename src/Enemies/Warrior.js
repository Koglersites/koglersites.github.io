
//a marching warrior that gets faster the higher the difficulty is
function Warrior(x, y, dmg, speed, dir, collisionBox, cooldown, hp){

    Enemy.call(this, x, y, dmg, warrior1, speed, dir, collisionBox, cooldown, hp);


    this.weight = 1;
    this.action = function() {

        if(this.dir == 1){
            if(this.tileCollision(this.posx, this.posy - this.speed)){
                this.dir++;
                this.sprite = warrior2;
            }
            else{
                this.screenPosy -= this.speed;
                this.posy = this.screenPosy + this.sprite.size/2;
            }
        } else if(this.dir == 2){
            if(this.tileCollision(this.posx - this.speed, this.posy)){

                this.dir++;
                this.sprite = warrior1;
            }
            else{
                this.screenPosx -= this.speed;
                this.posx = this.screenPosx + this.sprite.size/2;
            }
        } else if(this.dir == 3){
            if(this.tileCollision(this.posx, this.posy + this.speed)){
                this.dir++;
                this.sprite = warrior2;
            }
            else{
                this.screenPosy += this.speed;
                this.posy = this.screenPosy + this.sprite.size/2;
            }
        } else{
            if(this.tileCollision(this.posx + this.speed, this.posy)){
                this.dir = 1;
                this.sprite = warrior1;
            }
            else{
                this.screenPosx += this.speed;
                this.posx = this.screenPosx + this.sprite.size/2;
            }
        }
    };

};