import React from 'react';
import Featuretron from './Feature/featuretron';
import MusicPlayer from './MusicPlayer/music-player';
import Slider from './MusicPlayer/music-slider';
import Axios from 'axios';
    
export default class FeaturedRelease extends React.Component{
    constructor(){
        super();
        /* calling components from custom player */
        /* the state of the Featured header */
        this.state = {
            featured: {},
            playerStyle: {
                background: 'rgba(0,0,0,1)',
                color: 'rgba(255,255,255,1)',
                boxShadow: '0px 0px transparent',
            }
        };
        /* place featured artists name here */
        this.featuredArtist = 'Night-Drive';
        this.width = 1180;
        this.height = 25;
        this.offset = 10;
    }
    /* combines the dom objects with their correlating abstract form */
    componentDidMount(){      
        Axios.get("http://localhost:3000/data.json")
            .then((result) => {
            /* choose artist feature based on
            index in data.json
 
            CURRENTLY NOT WORKING
            BEN IF YOU CAN FIX IT PLEASE DO XD SHIT lol
            
            this.state.featured = result.data.artists.map(artist =>{
                if(artist.hasOwnProperty(this.featuredArtist)){
                    return artist;
                }
            }); 
            */
         }).catch(err =>{ console.log(err.response.data); });
    
    }
    render(){
        /*      
                below is the current placeholder for feature banner until i can figure out
                the issue of passing the artist images through this featuretron object
                
                <Featuretron width={ this.width } height="350" id="featured" featured={ this.state.featured } />
                
                currently music player pulls the source by hardcode, so we need to fix this later so we don't have
                to manually put in the source for the feature. Again this can be fixed with Axios I'm just having problems
                with it currently
         */
        return (
            <header id="feature-header" className="row">
                <div className="feature-icon" style={ { background: 'url(images/icon.jpg)'} }></div>
                
            
                <img src="images/rf.jpg" style={ { width: (this.width - this.offset)+"px", height: 'auto'} }/>
        
                <MusicPlayer components={ ['play', 'stop'] } initialColor="rgba(0,0,0,1)" activeColor="rgba(200,200,200,1)" id="featured" src="audio/Night%20Drive%20-%20Rise%20and%20Fall.wav"/>
                <Slider width={ this.width } height={ this.height } id="featured" featured={ this.state.featured }/>
            </header>
        );
    }
}
            
