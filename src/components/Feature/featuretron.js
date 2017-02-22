export default class Featuretron {
    constructor(images, dom, audioController, ctx){
        this.dom = null,
        this.audioController = null,
        this.ctx = null,
        this.images = images;
        this.convertedImgs = [];
    }
    createImg(){
       this.convertedImgs = this.images.map((src)=>{
           var tempImg = document.createElement('img');
           tempImg.setAttribute('src', './images/'+src);
           return tempImg;
       });
    }
    drawImages(){
       this.ctx.restore();
       this.ctx.clearRect(0,0, this.width, this.height);
       this.ctx.scale(this.scale, this.scale);
       this.convertedImgs.forEach((img, index)=>{
           /* centers the position for each drawing passed through */ 
           this.ctx.drawImage(img, -((img.naturalWidth - this.ctx.canvas.width)/2), 0);
       });
       this.ctx.save();
    }
    initialize(){
       this.createImg();
    }
    render(){
        this.drawImages();
    }
} 