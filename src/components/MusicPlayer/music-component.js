import React from 'react';

/* 
                    MUSIC COMPONENT
        When you create a component, you must state the type you want
        and its other properties for its initial state
        for example:
        <MusicComponent type={ } glyphicon={ } initialColor = { } activeColor={ }/>
        **type**
        
        defines what button you want to create:
                All Types Included:
                play
                stop
                repeat
                
        **glyphicon**
        
        defines the icon you want to use for the button. This property 
        hendges on the use of bootstrap, so without bootstrap running
        it will fail and show no icon
        
        **initialColor/activeColor**
        
        rather than rely on CSS for the color state, we take advantage of REACT 
        so that when each document for the artist is called upon, it can take 
        advantage of any settings located in the object.
        
        for example:
            ** artist document **
            {
                summary: " this is gibberish ",
                __________________________________
                theme:{
                    color: 'red'
                }
            }
            note that the document comes with its pre defined color to blend more 
            with the design
            
            now we can use that color and add it to each component like this:
            
            <MusicComponent components={ [array of components] } activeColor={ artist.theme.color } />
            
            as you can see we can now place the color in there for constant variation based on the artist shown
            or using <MusicPlayer/> which is essentially a wrapper for all the components, we
            can create the color context for all the components as such:
            
            <MusicPlayer initialColor={ 'blue' } activeColor={ 'red' }/> 
            this is a global provider for options and can also change based on its 
            global state
                
        
    
*/
export default class MusicComponent extends React.Component{
    constructor(props){
        super(props);
        this.audioController = null;
        this.isActive = false;
        this.state = {
            icon: this.props.glyphicon,
            styler: {
                background: this.props.initialColor
            }
        };
    }
    generateIcon() {
        switch(this.props.type){
            case 'play':
                this.setState({ icon: 'glyphicon-play'});
                break;
            case 'stop':
                this.setState({ icon: 'glyphicon-stop'});
                break;
            case 'repeat':
                this.setState({ icon: 'glyphicon-repeat'});
                break;
            default:
        }
    }
    /* default actions for when user hovers over music coponents */
    hoverOff(){
         this.setState({ styler: { background: this.props.initialColor }});
    }
    pressed(){
        this.isActive = !this.isActive;
        switch(this.props.type){
            case 'play':
                if(this.state.icon === 'glyphicon-pause'){
                    this.audioController.pause();
                    this.setState({ icon: 'glyphicon-play'}); 
                } else{
                    this.audioController.play();
                    this.setState({ icon: 'glyphicon-pause'});
                }
                break;
            case 'stop':
                this.audioController.pause();
                this.audioController.currentTime = 0;
                break;
            case 'repeat':
            default:
        }
    }
    changeColor(){
        this.setState({ styler:{ background: this.props.activeColor }});
    }
    componentWillMount(){
        this.generateIcon();
    }
    componentDidMount(){
        this.audioController = document.querySelector('#audio-controller-'+this.props.id);
        /*  
            this will grab every player component on the dom 
            so be aware if you put multiple players on site 
            
            until i come back to beef up these features i will leave the code below
            untouched
                                                         
        this.allComponents = document.querySelectorAll('#player-'+this.props.id); 
         */

    }
    render(){
        return (
            <div style={ this.state.styler } className={"player-components "+this.props.type} onMouseOut={ (e)=>{ this.hoverOff(); } } onMouseOver={ (e)=>{ this.changeColor(); } } onClick={ (e)=>{ this.pressed(); } } >
                 <span className={ "glyphicon "+this.state.icon } />
            </div>
        );
    }
}