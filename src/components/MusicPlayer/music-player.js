import React from 'react';
import { MusicComponent } from './music-component';

var playerSettings = {
        x: 0,
        y: 0,
        height: 25,
        width: 100, //setting will be replaced latter in code
    },
    artist = {
        id: 0,
        summary: "Night Drive's first single from their upcoming self-titled album, out Mid-2017. True to the Night Drive ethos, the song boasts exactly the kind of glossy, echoed Interpol and Lower Dens vibes that are ideal to put on while rocketing down the interstate at 90mph in the dead of night.",
        audio: {
            src: ["audio/Night%20Drive%20-%20Rise%20and%20Fall.wav"],
            type: "audio/wav",
        },
        icon: "icon.jpg",
        imgs: {
            /* seperated by [source] and [settings] for source per object in array*/
            src: ["rf.jpg"],
            settings: [{ position: { x: 0, y: 0} }]
        }
};
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
export class MusicPlayer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            initial: {
                color: this.props.initialColor
            },
            active: {
                color: this.props.activeColor
            }
        };
    }
    loadComponents(){
        var tempPackage = this.props.components.map((comp)=>{
          return <MusicComponent type={ comp.type } glyphicon={ comp.glyphicon } initialColor={ this.state.initial.color } activeColor={ this.state.active.color }/>;        
        });
        return <div>{tempPackage}</div>;
       
    }
    render(){
        return (
            <div className="player-wrapper col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <audio id="audio-controller">
                    <source src= { artist.audio.src[0] }/>
                </audio>
                { this.loadComponents() }
            </div>
        );
    }
}
