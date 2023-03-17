class collisionAnimation {
    constructor(game, x, y){
        this.game = game;
        this.image = boom;
        this.spriteWidth = 100;
        this.spriteHeight = 90;
        this.sizeModifier = Math.random() + .5;
        this.width = this.spriteWidth * this.sizeModifier;
        this.height = this.spriteHeight * this.sizeModifier;
        this.x = x - this.width * .5;
        this.y = y - this.height * .5;
        
    }
}