import React from 'react';

export default class Featuretron extends React.Component{
    constructor(props){
        super(props);
        this.audioController = null,
        this.ctx = null,
        this.convertedImgs = [];
        this.state = {
            images: null,
        }
        this.width = this.props.width;
        this.height = this.props.height;
    }
    createImg(){
       if(typeof this.state.images === "string"){
            console.log(this.state.images);
            let tempArr = [];
            let tempImg = document.createElement('img'.toUpperCase());
            tempArr.push(this.state.images);
            this.convertedImgs = tempArr;
       }
       else if(this.state.images instanceof Array){
            this.convertedImgs = this.state.images.map((src)=>{
               var tempImg = document.createElement('img'.toUpperCase());
               tempImg.setAttribute('src', src);
               return tempImg;
            });
       }
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
    update(){
        this.drawImages();
    }
    componentDidMount(){
        let featuretron = document.querySelector('#featuretron-'+this.props.id);
        this.audioController = document.querySelector('#audio-controller-'+this.props.id);
        this.ctx = featuretron.getContext('2d');
    
        this.initialize();
        
        let sequence = setInterval(() => { this.update(); }, this.fps);
        console.log(this.props.featured);
    }
    render(){
        return (
            <div>
                <canvas id={ "featuretron-"+this.props.id } width={ this.width+"px" } height={ this.height+"px" } style={ { width: this.width+"px", height: this.height+"px" } }></canvas>
            </div>
        );
    }
} 