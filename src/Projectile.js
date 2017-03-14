function Projectile(x, y, dmg, sprite, speed, dir, collisionBox){
    Entity.call(this, x, y, dmg, sprite, speed, dir, collisionBox);

    this.xa = 0;
    this.ya = 0;

    if(this.dir == 1) {
        this.ya--;
    } else if(this.dir == 2){
        this.xa--;
    } else if(this.dir == 3){
        this.ya++;
    } else if(this.dir == 4){
        this.xa++;
    }


    this.updateProjectilePos = function(){
        this.posx += (this.xa * this.speed) ;
        this.posy += (this.ya * this.speed) ;
        this.screenPosx = this.posx - (this.sprite.size/2);
        this.screenPosy = this.posy - (this.sprite.size/2);
        return false;

    };




};
