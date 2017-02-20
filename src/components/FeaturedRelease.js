import React from 'react';
import { Featuretron } from './Feature/featuretron';
import { MusicPlayer } from './MusicPlayer/music-player';

var headerTitle = "Latest Release",
    playerSettings = {
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
        theme: {
            color: 'rgba(0,50,200,1)'
        },
        imgs: {
            /* seperated by [source] and [settings] for source per object in array*/
            src: ["rf.jpg"],
            settings: [{ position: { x: 0, y: 0} }]
        }
};
/* create your abstract objects here for dom manipulation later */
var featDefault = new Featuretron(artist.imgs, {}, {}, null);
/* simulating a mongodb document here for artist featured */
    
class FeaturedRelease extends React.Component{
    constructor(){
        super();
        /* calling components from custom player */
        /* the state of the Featured header */
        this.state = {
            playerStyle: {
                background: 'rgba(0,0,0,1)',
                color: 'rgba(255,255,255,1)',
                boxShadow: '0px 0px transparent',
            }
        };
    }
    /* combines the dom objects with their correlating abstract form */
    componentDidMount(){         
        var featureWrapper = document.querySelector('#feature-wrapper'),
            featuretron = document.querySelector('#featuretron'),
            featureText = document.querySelector('.feature-text');
            featDefault.dom = featuretron;
            featDefault.ctx = featuretron.getContext('2d');
        
            featDefault.ctx.canvas.width = featureWrapper.scrollWidth;
            featDefault.ctx.canvas.height = featureText.scrollHeight;
            featDefault.initialize();
            featDefault.render();
    }
    render(){
        return (
            <header id="feature-header" className="row">
                <div id="feature-wrapper" className="col-lg-8 col-md-8">
                    <div className="feature-icon" style={ { background: "url(./images/"+artist.icon+")"} } ></div>
                    <canvas id="featuretron"></canvas>
                </div>
                <div className="col-lg-4 col-md-4 feature-text">
                    <h1> { this.props.title } </h1>

                    <p>
                        { artist.summary }
                    </p>
                </div>
                <MusicPlayer components={ [{ type: 'play', glyphicon: 'glyphicon-play'}, { type: 'stop', glyphicon: 'glyphicon-stop'}, { type: 'repeat', glyphicon: 'glyphicon-repeat'},] } initialColor="rgba(255,100,0,1)" activeColor={ artist.theme.color }/>
       
            </header>
        )
    }
}
export default FeaturedRelease;

                    /*
                    <div className="artist-links">
                        <a className="spread-btn btn-spotify"
                           href="https://open.spotify.com/track/5hl22gaWiQVhI6rYFmfJvq"><span className="glyphicon glyphicon-cd"></span></a>

                        <a className="spread-btn btn-artist" href="http://www.nightdrivemusic.com/"><span className="glyphicon glyphicon-globe"></span></a>

                        <a className="spread-btn btn-buy" href="#"><span className="glyphicon glyphicon-shopping-cart"></span></a>
                    </div>
                    */
