import React from 'react';
import MusicComponent from './music-component';

/* 
                    Music Player 
    acts as the ultimate player wrapper
    for importing anywhere in the page.
    example: 
    <MusicPlayer components={ components }  initalColor={} activeColor={}/>
    
    **components**
    you can pass the MusicPlayer object an array of what components you want
    included in the player
    and when it loads you will see these player components such as the play
    button or stop button cohesively propagate into the div wrapper
    
    **styler**
    the styler allows you to pass and object that contains the neccesary colors and or
    css settings for the button you wanted implemented using javascript
*/
export default class MusicPlayer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            src: this.props.src,
            initial: {
                color: this.props.initialColor
            },
            active: {
                color: this.props.activeColor
            }
        };
    }
    loadComponents(){
        var tempPackage = this.props.components.map((type , index) =>
        {
          return <MusicComponent key={index} type={ type }  initialColor={ this.state.initial.color } activeColor={ this.state.active.color } id={ this.props.id }/>;
        });
        return <div>{tempPackage}</div>;
       
    }
    render(){
        return (
            <div id={ "player-"+this.props.id } className="player-wrapper col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <audio id={ "audio-controller-"+this.props.id }>
                    <source src={ this.state.src }/>
                </audio>
                { this.loadComponents() }
            </div>
        );
    }
}
