export class UI {
    constructor(game) {
        this.game = game;
        this.fontSize = 30;
        this.fontFamily = 'Helvetica';
    }
    draw(context) {
        context.save();
        context.shadowOffsetX = 2;
        context.shadowOffsetY = 2;
        context.shadowColor = 'white';
        context.shadowBlur = 0;
        context.font = this.fontSize + 'px ' + this.fontFamily;
        context.textAlign = 'left';
        context.fillStyle = this.game.fontColor;
        //scoring
        context.fillText('Score: ' + this.game.score, 20, 50);
        //timer
        context.font = this.fontSize * .8 + 'px ' + this.fontFamily;
        context.fillText('Time: ' + (this.game.time *.001).toFixed(1), 20, 80);
        //gameovermessage
        if (this.game.gameOver) {
            context.textAlign = 'center';
            context.font = this.fontSize * 2 + 'px ' + this.fontFamily;
            if (this.game.score > 5) {
                context.fillText('Boo-yah', this.game.width * .5, this.game.height * .5 - 20);
                context.font = this.fontSize * .8 + 'px ' + this.fontFamily;
                context.fillText('What are creatures of the night afraid of? YOU!!!', this.game.width * .5, this.game.height * .5 + 20);
            } else {
                context.fillText('Love at first bite?', this.game.width * .5, this.game.height * .5 - 20);
                context.font = this.fontSize * .8 + 'px ' + this.fontFamily;
                context.fillText('Nope, better luck next time!', this.game.width * .5, this.game.height * .5 + 20);
            }
            
        }
        context.restore();
    }
}