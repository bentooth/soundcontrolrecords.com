import React from 'react';
import MusicPlayer from './MusicPlayer/music-player';
import Slider from './MusicPlayer/music-slider';
/*import Featuretron from './Feature/featuretron';*/
import Axios from 'axios';

export default class FeaturedRelease extends React.Component{
    constructor(){
        super();
        /* calling components from custom player */
        /* the state of the Featured header */
        this.state = {
            id: null,
            img: null,
            song: null,
            playerStyle: {
                background: 'rgba(0,0,0,1)',
                color: 'rgba(255,255,255,1)',
                boxShadow: '0px 0px transparent',
            }
        };
        /* place featured artists name here */
        this.width = 1180;
        this.height = 25;
        this.offset = 10;
        this.getFeatureData = this.getFeatureData.bind(this);
    }

    getFeatureData() {
        //Axios.get("http://soundcontrolrecords.com/data.json")
        Axios.get("http://localhost:3000/data.json")
            .then((result) => {
                let artists = result.data.artists;
                artists.forEach((artist) => {
                    if(Boolean(artist.featured)) {
                        this.setState({
                            id: artist.id,
                            img: artist.featdata.img,
                            song: artist.featdata.song
                        });
                    }
                });
            }).catch(err =>{ console.log(err); });
    }

    componentDidMount() {
        this.getFeatureData();
    }

    render() {
        console.log(this.state.song+"------");
        /*
             Not sure why this.state.song doesn't work when passing to MusicPlayer :(
             Also, I think I broke Slider

             <Slider width={ this.width } height={ this.height } id="featured" featured={ this.state.featured }/>
         */
        return (
            <header id="feature-header" className="row">
                <a href="http://www.spin.com/2016/11/night-drive-rise-and-fall-premiere-stream/"><img className="img-responsive" src={this.state.img} style={ { width: (this.width - this.offset)+"px", height: 'auto'} } role="presentation"/></a>
                <MusicPlayer components={ ['play', 'stop'] } initialColor="rgba(0,0,0,1)" activeColor="rgba(200,200,200,1)" id="featured" src="audio/Night%20Drive%20-%20Rise%20and%20Fall.wav"/>
                <Slider width={ this.width } height={ this.height } id="featured"/>
            </header>
                
        );
    }
}

FeaturedRelease.defaultProps = {
    id: null,
    img: null,
    song: null,
};