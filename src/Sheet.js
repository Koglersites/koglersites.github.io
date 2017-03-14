function Sheet(path, tileBase){

    this.tileBase = tileBase;

    this.img = new Image();
    this.img.src = path;

};

var uiSheet = new Sheet("../res/ui.png", 32);
var WeaponSheet = new Sheet("../res/weapon.png", 32);
var EnemySheet = new Sheet("../res/enemies.png", 128);
var GroundSheet = new Sheet("../res/basicSheet.png", 64);
var CharacterSheet = new Sheet("../res/char.png", 128);
