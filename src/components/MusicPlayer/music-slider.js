import React from 'react';

export default class Slider extends React.Component{
    constructor(props){
        super(props);
        this.ctx = null;
        this.width = this.props.width;
        this.height = this.props.height;
        this.offset = 25;
        this.audioController = null;
        this.fps = 1000/30;
        this.controller = {
            x: 0,
            y: 0
        };
        this.state = {
            theme: null,
            styler: { background: 'rgba(0,0,0,1)', width: '100%', height: this.height+"px", transform: this.controller.x },
        };
        this.grabbedControl = false;
    }
    timeGrowth(offset){
        return (((this.width - this.height * 2)/this.audioController.duration) * this.audioController.currentTime) + ( offset? offset: 0) ;
    }
    drawRange(){
        this.ctx.fillStyle = 'rgba(255,255,255,1)';
        this.ctx.fillRect(this.offset  ,(this.height/2 - (this.height/5)/2), (this.width - this.height * 2), this.height/5);
    }
    drawLoader(){
        this.ctx.fillStyle = 'rgba(175,175,175,1)';
        this.ctx.fillRect(this.offset ,(this.height/2 - (this.height/5)/2), this.timeGrowth() , this.height/5);
    }
    drawControl(){
        this.controller.x = this.timeGrowth(this.offset);
        this.ctx.fillStyle = 'rgba(255,255,255,1)';
        this.ctx.strokeStyle = 'rgba(0,0,0,1)';
        this.ctx.lineWidth = 4;
        this.ctx.beginPath();
        this.ctx.arc(this.controller.x, this.height/2, this.height/4, 0, Math.PI * 2);
        this.ctx.stroke();
        this.ctx.fill();
        this.ctx.closePath();
    }
    pressed(e){
       this.moveControl(e);
    }
    lift(e){
        this.grabbedControl = false;
    }
    leave(e){
        this.grabbedControl = false;
    }
    hover(e){
        if(this.grabbedControl){
            this.audioController.currentTime = ((e.layerX - (this.offset))/(this.width - (this.offset * 2))) * this.audioController.duration;
        }
    }
    moveControl(down){
        /*
        checks every pixel within the slider controller against the mouse click and
        returns true if the points match each other
        */
        if((this.offset) <= down.layerX && (this.width - this.offset) >= down.layerX && (this.height/2 - this.height/8) <= down.layerY && (this.height/2 + this.height/8) >= down.layerY){
            this.grabbedControl = true;
        }
    }
    initialize(){
        this.drawRange();
    }
    update(){
        this.ctx.save();
        this.ctx.clearRect(0,0, this.width, this.height);
        this.drawRange();
        this.drawLoader();
        this.drawControl();
        this.ctx.restore();
    }
    componentDidMount(){
        let sliderCanvas = document.querySelector('#music-slider-'+this.props.id);
        this.audioController = document.querySelector('#audio-controller-'+this.props.id);
        this.ctx = sliderCanvas.getContext('2d');
        
        sliderCanvas.addEventListener('mousedown', (e) =>{
            this.pressed(e);
        });
          sliderCanvas.addEventListener('mouseup', (e) =>{
            this.lift(e);
        });
          sliderCanvas.addEventListener('mousemove', (e) =>{
            this.hover(e);
        });
        sliderCanvas.addEventListener('mouseleave', (e) =>{
            this.leave(e);
        });
        this.initialize();
     
        let sequence = setInterval(() => { this.update(); }, this.fps);
    }
    render(){
        
        return (
            <div className="slider-wrapper">
                <canvas  width={ this.width+"px" } height={ this.height+"px" } style={ this.state.styler } id={ "music-slider-"+this.props.id } className="slider"></canvas>
            </div>
        );
    }
}