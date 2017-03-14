function Sprite(sheet, xi, yi, size) {

    this.sheet = sheet;
    this.xi = xi;
    this.yi = yi;
    this.size = size;

    this.drawSprite = function drawSprite(posx, posy) {
        ctx.drawImage(this.sheet.img,
            this.xi * this.size, this.yi * this.size,
            this.size, this.size,
            posx, posy,
            this.size, this.size
        );
    };

};

var wood = new Sprite(GroundSheet, 0, 0, 64);
var stoneFloor = new Sprite(GroundSheet, 1, 1, 64);
var stoneWall = new Sprite(GroundSheet, 1, 0, 64);
var brickWall = new Sprite(GroundSheet, 2, 0, 64);
var bookWall = new Sprite(GroundSheet, 0, 1, 64);

var lava = new Sprite(GroundSheet, 0, 2, 64);
var voidness = new Sprite(GroundSheet, 2, 1, 64);
var shroom = new Sprite(GroundSheet, 1, 2, 64);
var rock = new Sprite(GroundSheet, 2, 2, 64);

var door = new Sprite(GroundSheet, 0, 3, 64);

var upArrow = new Sprite(WeaponSheet, 0, 0, 32);
var leftArrow = new Sprite(WeaponSheet, 1, 0, 32);
var rightArrow = new Sprite(WeaponSheet, 2, 0, 32);
var downArrow = new Sprite(WeaponSheet, 3, 0, 32);
var blobb = new Sprite(WeaponSheet, 0, 1, 32);
var fire = new Sprite(WeaponSheet, 1, 1, 32);

var warrior1 = new Sprite(EnemySheet, 0, 0, 128);
var warrior2 = new Sprite(EnemySheet, 1, 0, 128);
var spitter1 = new Sprite(EnemySheet, 0, 1, 128);
var spitter2 = new Sprite(EnemySheet, 1, 1, 128);
var spellcaster1 = new Sprite(EnemySheet, 0, 2, 128);
var spellcaster2 = new Sprite(EnemySheet, 1, 2, 128);

var heart = new Sprite(uiSheet, 0, 0, 32);

var playerUp1 = new Sprite(CharacterSheet, 0, 0, 128);
var playerUp = new Sprite(CharacterSheet, 1, 0, 128);
var playerUp2 = new Sprite(CharacterSheet, 2, 0, 128);

var playerRight1 = new Sprite(CharacterSheet, 0, 1, 128);
var playerRight = new Sprite(CharacterSheet, 1, 1, 128);
var playerRight2 = new Sprite(CharacterSheet, 2, 1, 128);

var playerDown1 = new Sprite(CharacterSheet, 0, 2, 128);
var playerDown = new Sprite(CharacterSheet, 1, 2, 128);
var playerDown2 = new Sprite(CharacterSheet, 2, 2, 128);


var playerLeft1 = new Sprite(CharacterSheet, 0, 3, 128);
var playerLeft = new Sprite(CharacterSheet, 1, 3, 128);
var playerLeft2 = new Sprite(CharacterSheet, 2, 3, 128);