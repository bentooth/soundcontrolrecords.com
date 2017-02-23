import React from 'react';
import MusicPlayer from '../components/MusicPlayer/music-player';

const Releases = ({releases}) => {

    const myReleases = releases;

    const releaseList = Object.keys(myReleases).map(function(key) {
        return (
            <div key={key}>
                <div className="release">
                    <MusicPlayer components={ ['play', 'stop'] } initialColor="rgba(0,0,0,1)" activeColor="rgba(200,200,200,1)" id={ key } src={ myReleases[key]["audio"] } />
                    <h3><span>{ myReleases[key]["name"] } <br/> ({myReleases[key]["type"]})</span></h3>
                    <img src={ myReleases[key]["art"] } className="img-responsive thumbnail" role="presentation"/>
                </div>
                <a className="myButton" href={ myReleases[key]["buy"] }>BUY</a>
            </div>
        )
    });

    return(
        <div>
            {releaseList}
        </div>
    )
};

Releases.defaultProps = {
    releases: {}
};

export default Releases;
