import React from 'react';

export default class Slider extends React.Component{
    constructor(props){
        super(props);
        this.ctx = null;
        this.width = this.props.width;
        this.height = this.props.height;
        
    }
    drawRange(){
        this.ctx.fillRect(this.height ,(this.height/2 - (this.height/5)/2), (this.width - this.height * 2), this.height/5);
    }
    componentDidMount(){
        let sliderCanvas = document.querySelector('#music-slider');
        this.ctx = sliderCanvas.getContext('2d');
        
        this.drawRange();
    }
    render(){
        return (
            <div>
                <canvas width={ this.props.width } height={ this.props.height } style={ { background: 'red' }}id="music-slider"></canvas>
            </div>
        );
    }
}