function Wall(sheet){
    this.tileset = [];

    this.exit = [cExitUp, 4, 0];

    this.renderWalls = function(){
        for(var k = 1; k < (canvas.width / sheet.tileBase)-1; k++){
            cWallUp.drawSprite(k * sheet.tileBase, 0);
            cWallDown.drawSprite(k * sheet.tileBase, ((canvas.height / sheet.tileBase)-1) * sheet.tileBase);
        }
        for(var n = 1; n < (canvas.height / sheet.tileBase) - 1; n++){
            cWallLeft.drawSprite(0, n * sheet.tileBase);
            cWallRight.drawSprite(((canvas.width / sheet.tileBase)-1) * sheet.tileBase, n * sheet.tileBase);
        }
        this.exit[0].drawSprite(this.exit[1]* sheet.tileBase, this.exit[2]*sheet.tileBase);

        cCornerTopLeft.drawSprite(0,0);
        cCornerTopRight.drawSprite(((canvas.width / sheet.tileBase)-1) * sheet.tileBase, 0);
        cCornerBotLeft.drawSprite(0,((canvas.height / sheet.tileBase)-1) * sheet.tileBase);
        cCornerBotRight.drawSprite(((canvas.width / sheet.tileBase)-1) * sheet.tileBase,((canvas.height / sheet.tileBase)-1) * sheet.tileBase);

    };

};

var caveWall = new Wall(WallSheet);