function ProjectileList(){

    this.list = [];
    this.update = function() {
        for (var i = 0; i < this.list.length; i++) {
            if (this.list[i].updateProjectilePos()) {
                this.list.splice(i, 1);
            }
        }
    };

    this.render= function(){
        for(var i = 0; i < this.list.length; i++){
            this.list[i].sprite.drawSprite(this.list[i].screenPosx, this.list[i].screenPosy);
        }
    };


};