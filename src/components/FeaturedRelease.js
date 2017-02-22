import React from 'react';
import Featuretron from './Feature/featuretron';
import MusicPlayer from './MusicPlayer/music-player';
import Slider from './MusicPlayer/music-slider';


/* create your abstract objects here for dom manipulation later */
let featDefault = new Featuretron(["rf.jpg"], {}, {}, null);
/* simulating a mongodb document here for artist featured */
    
export default class FeaturedRelease extends React.Component{
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
    loadPlayer(){
    }
    /* combines the dom objects with their correlating abstract form */
    componentDidMount(){      
        
        let featureWrapper = document.querySelector('#feature-wrapper'),
            featuretron = document.querySelector('#featuretron');
            featDefault.dom = featuretron;
            featDefault.ctx = featuretron.getContext('2d');
        
            featDefault.ctx.canvas.width = featureWrapper.scrollWidth;
            featDefault.ctx.canvas.height = "400px";
            featDefault.initialize();
            featDefault.render();
    }
    render(){
        return (
            <header id="feature-header" className="row">
                <div id="feature-wrapper" className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="feature-icon" style={ { background: "url(./images/icon.jpg)" } } ></div>
                    <canvas id="featuretron"></canvas>
                </div>
                <MusicPlayer components={ ['play', 'stop', 'repeat'] } initialColor="rgba(0,0,0,1)" activeColor="rgba(200,200,200,1)" id="audio-controller-featured" src="audio/Night%20Drive%20-%20Rise%20and%20Fall.wav"/>
                <Slider width='800' height='25' />
            </header>
        );
    }
}
                    /*
                    <div className="artist-links">
                        <a className="spread-btn btn-spotify"
                           href="https://open.spotify.com/track/5hl22gaWiQVhI6rYFmfJvq"><span className="glyphicon glyphicon-cd"></span></a>

                        <a className="spread-btn btn-artist" href="http://www.nightdrivemusic.com/"><span className="glyphicon glyphicon-globe"></span></a>

                        <a className="spread-btn btn-buy" href="#"><span className="glyphicon glyphicon-shopping-cart"></span></a>
                    </div>
                    */
