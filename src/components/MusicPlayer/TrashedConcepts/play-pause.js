import { Buttons } from './buttons';
export class PlayAndPause extends Buttons {
    constructor(sides, dom, audioController, ctx){
        super(sides, sides);
        this.type = 'play',
        this.dom = dom;
        this.audioController = audioController;
        this.ctx = ctx;
        this.icon = {
            color: 'rgba(255,255,255,1)'
        }
        /* booleans */
        this.firstClick = false;
        this.isPaused = false;
        
    }
    draw(type){
        var rectWidth = (this.width - this.offset*3)/2, 
            rectHeight = this.height - (this.offset*2);
        this.ctx.restore();
        this.ctx.clearRect(0,0, this.width, this.height);
        this.ctx.scale(this.scale, this.scale);
        switch(type){
            case 'play':
                this.ctx.beginPath();
                this.ctx.scale(this.scale, this.scale);
                this.ctx.fillStyle = this.icon.color;
                this.ctx.moveTo(this.offset, this.offset);
                this.ctx.lineTo((this.width - this.offset), (this.height/2));
                this.ctx.lineTo(this.offset, (this.height - this.offset));
                this.ctx.fill();
                this.ctx.closePath();
                break;
            case 'pause':
                this.ctx.fillRect(this.offset, this.offset, rectWidth, rectHeight);
                this.ctx.fillRect(this.width - (this.offset + rectWidth), this.offset, rectWidth, rectHeight);
                break;
            default:
        }
        this.ctx.save();
    }
    set sides(length){
        this.width = length;
        this.height = length;
    }
    idleIcon(){
        if(!this.audioController.playing){
            this.draw('play');
        }
    }
    pressed(e){
        if(!this.isPaused){
            this.draw('pause');
            this.audioController.play();
            this.isPaused = true;
        } else {
            this.draw('play');
            this.audioController.pause();
            this.isPaused = false;
        }
    }
    initialize(){
        this.idleIcon();
    }
}
