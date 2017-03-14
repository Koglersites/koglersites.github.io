function Level(groundTile, wallTile, weight, difficulty){

    this.xsize = 20;
    this.ysize = 10;

    this.levelBase = 64;

    this.difficulty = difficulty;
    this.groundTile = groundTile;
    this.wallTile = wallTile;

    this.maxweight = weight;
    this.weight = weight;

    this.tileset = [];
    this.occupied = [];
    this.enemyset = [];

    //player pos cancels initial collision -- simplified
    this.occupied[ 5* (this.xsize) + 9] = true;
    this.occupied[ 6* (this.xsize) + 9] = true;
    this.occupied[ 5 * (this.xsize) + 10] = true;
    this.occupied[ 6 * (this.xsize) + 10] = true;

    this.generateLevel = function() {


        //laying out the initial Ground
        for(var k = 0; k < this.ysize; k++){
            for(var i = 0; i < this.xsize; i++){
                this.tileset.push(this.groundTile);
            }
        }

        //Building the Walls
        for(k = 0; k < this.ysize; k++){
            this.tileset[k * (this.xsize) ] = this.wallTile;
            this.tileset[k * (this.xsize) + (this.xsize - 1)] = this.wallTile;
        }

        for(var n = 0; n < this.xsize; n++){
            this.tileset[n] = this.wallTile;
            this.tileset[(this.ysize - 1) * (this.xsize) + n] = this.wallTile;
        }


        //Spawning Enemies
        var rx = 0;
        var ry = 0;
        var dir = 0;
        var e = 0;
        while(this.weight > 0){
            rx = Math.floor(Math.random() * (this.xsize - 3)) + 1;
            ry = Math.floor(Math.random() * (this.ysize - 3)) + 1;
            if(rx < this.xsize/2)
                dir = 1;
            else dir = 2;
            if(!this.occupied[ry * (this.xsize) + rx]){
                e = Math.floor(Math.random() * 3);
                if(e == 0 && this.weight > 1){
                    this.enemyset.push(new Spellcaster(rx * this.levelBase, ry * this.levelBase, 10, 3, dir,
                        new CollisionBox(48, 90, 40, 95), 80, 5));
                } else if(e == 1){
                    this.enemyset.push(new Warrior(rx * this.levelBase, ry * this.levelBase, 0, 3*this.difficulty, dir,
                        new CollisionBox(48, 90, 40, 95), 80, 5));

                } else
                    this.enemyset.push(new Spitter(rx * this.levelBase, ry * this.levelBase, 5, 3, dir,
                        new CollisionBox(48, 90, 40, 95), 60 / this.difficulty, 5));


                this.occupied[ry * (this.xsize) + rx] = true;
                this.occupied[(ry+1) * (this.xsize) + rx] = true;
                this.occupied[ry * (this.xsize) + rx+1] = true;
                this.occupied[(ry+1) * (this.xsize) + rx+1] = true;
                this.weight -= this.enemyset[this.enemyset.length - 1].weight;
            }
        }

        //building obstacles
        var t = 0;
        for(n = 0; n < this.xsize/2; n++){
            for(i = 0; i < 2; i++) {
                do{
                    rx = Math.floor(Math.random() * (this.xsize - 2)) + 1;
                    ry = Math.floor(Math.random() * (this.ysize - 2)) + 1;

                } while(this.occupied[ry * (this.xsize) + rx]);

                t = Math.floor(Math.random() * 2);
                if(this.difficulty >= 4){
                    if(t == 0)
                        this.tileset[ry * (this.xsize) + rx] = tileLava;
                    if(t == 1)
                        this.tileset[ry * (this.xsize) + rx] = tileVoid;
                } else if(this.difficulty >= 2){
                    if(t == 0)
                        this.tileset[ry * (this.xsize) + rx] = tileShroom;
                    if(t == 1)
                        this.tileset[ry * (this.xsize) + rx] = tileRock;
                }
            }
        }
    };


    this.render = function () {
        var currtile;
        //render tiles
        for(var n = 0; n < this.ysize; n++){
            for(var i = 0; i < this.xsize; i++){
                currtile = this.tileset[(n * this.xsize) + i];
                currtile.sprite.drawSprite(i * currtile.sprite.size, n*currtile.sprite.size);
            }
        }

        //render level's enemies
        for(var k = 0; k < this.enemyset.length; k++){
            this.enemyset[k].sprite.drawSprite(this.enemyset[k].screenPosx, this.enemyset[k].screenPosy);
        }
    };

    this.spawnDoor = function(){
        var rx = 0;
        var ry = 0;

        //searching for an unoccupied space to spawn the door
        while(!this.occupied[ry * (this.xsize) + rx]){
            rx = Math.floor(Math.random() * (this.xsize - 3)) + 1;
            ry = Math.floor(Math.random() * (this.ysize - 3)) + 1;
        }
        this.tileset[ry * (this.xsize) + rx] = tileDoor;
    };

    this.getTile = function(posx, posy){
        //converting a position into a specific Tile
        var i = parseInt(posx/this.levelBase);
        var n = parseInt(posy/this.levelBase);
        return this.tileset[n * (level.xsize) + i];
    };


};