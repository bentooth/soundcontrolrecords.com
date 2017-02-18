export class Buttons{
    constructor(width, height){
        /* all buttons should come out perfectly square */
        this.width = width;
        this.height = height;
        this.scale = 1;
    }
    draw(){
    }
    get offset(){
       return this.height/5;
    }
}