function Tile(id, solid, harmful, dmg, sprite){

    this.id = id;
    this.solid = solid;
    this.harmful = harmful;
    this.dmg = dmg;
    this.sprite = sprite;


};

var tileWood = new Tile(2, false, false, 0, wood);
var tileStoneFloor = new Tile(3, false, false, 0, stoneFloor);
var tileStoneWall = new Tile(4, true, false, 0, stoneWall);
var tileBrickWall = new Tile(5, true, false, 0, brickWall);
var tileBookWall = new Tile(6, true, false, 0, bookWall);

var tileLava = new Tile(7, false, true, 0.3, lava);
var tileVoid = new Tile(8, false, true, 0.4, voidness);
var tileShroom = new Tile(9, false, true, 0.2, shroom);
var tileRock = new Tile(10, true, false, 0, rock);

var tileDoor = new Tile(11, false, false, 0, door);
