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

const MusicPlayer = ({components, initialColor, activeColor, id, src}) => {

    let tempPackage = components.map((type , index) => {
        return <MusicComponent key={index} type={type} initialColor={initialColor} activeColor={activeColor} id={id}/>;
    });

    return(
        <div id={"player-"+id} className="player-wrapper col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <audio id={"audio-controller-"+id}>
                <source src={src}/>
            </audio>
            {tempPackage}
        </div>
    )
};

export default MusicPlayer;

