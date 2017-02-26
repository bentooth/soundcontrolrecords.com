import React from 'react';
import MusicPlayer from './MusicPlayer/music-player';
import Slider from './MusicPlayer/music-slider';
/*import Featuretron from './Feature/featuretron';*/
import Axios from 'axios';

class FeaturedRelease extends React.Component{
    constructor(props){
        super(props);
        /* calling components from custom player */
        /* the state of the Featured header */
        this.state = {
            feature: {},
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
    }

    componentDidMount() {
        //Axios.get("http://soundcontrolrecords.com/data.json")
        Axios.get("http://localhost:3000/data.json")
            .then((result) => {
                let artists = result.data.artists;
                artists.forEach((artist) => {
                    if(Boolean(artist.featured)) {
                        this.setState({
                            feature: artist.featdata
                        });
                    }
                });
            }).catch(err =>{ console.log(err); });
    }

    render() {
        console.log(this.state.feature);
        return (
            <header id="feature-header" className="row">
                <a href="http://www.spin.com/2016/11/night-drive-rise-and-fall-premiere-stream/"><img className="img-responsive" src={this.state.feature.img} style={ { width: (this.width - this.offset)+"px", height: 'auto'} } role="presentation"/></a>
                <MusicPlayer components={ ['play', 'stop'] } initialColor="rgba(0,0,0,1)" activeColor="rgba(200,200,200,1)" id="featured" src="audio/Night%20Drive%20-%20Rise%20and%20Fall.wav" />
                <Slider width={ this.width } height={ this.height } id="featured"/>
            </header>
        );
    }
}

FeaturedRelease.defaultProps = {
    feature: {}
};

export default FeaturedRelease