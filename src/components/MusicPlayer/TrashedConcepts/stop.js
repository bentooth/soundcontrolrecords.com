import { Buttons } from './buttons';
export class Stop extends Buttons {
    constructor(sides, dom, audioController, ctx){
        super(sides, sides);
        this.type = 'stop',
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
    draw(){
        this.ctx.restore();
        this.ctx.clearRect(0,0, this.width, this.height);
        this.ctx.scale(this.scale, this.scale);
        this.ctx.fillStyle = this.icon.color;
        this.ctx.fillRect(this.offset, this.offset, this.width - (this.offset * 2), this.height - (this.offset * 2));
        this.ctx.save();
    }
    set sides(length){
        this.width = length;
        this.height = length;
    }
    idleIcon(){
        this.draw();
    }
    pressed(e){
        this.audioController.pause();
        this.audioController.currentTime = 0;
    }
    initialize(){
        this.idleIcon();
    }
}