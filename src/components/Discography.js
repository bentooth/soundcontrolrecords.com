import React from 'react';
import FeaturedRelease from '../components/FeaturedRelease';
import Nav from '../components/Nav';
import Axios from 'axios';

class Discography extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            releases: []
        };

        this.getArtistData = this.getArtistData.bind(this);
        this.getReleaseData = this.getReleaseData.bind(this);
    }

    componentDidMount() {
        this.getArtistData();
    }

    getArtistData() {
        //Axios.get("http://new.soundcontrolrecords.com/data.json")
        Axios.get("http://localhost:3000/data.json")
            .then((result) => {
                let artists = result.data.artists;
                artists.forEach(artists => {
                    this.getReleaseData(artists.releases)
                })
            });
    }

    getReleaseData(releases) {
        if (this.state.releases === []) {
            this.setState({
                releases: releases
            })
        } else {
            this.setState({
                releases: this.state.releases.concat(releases)
            })
        }
    }

    render() {

        const myReleases = this.state.releases;

        const releaseList = Object.keys(myReleases).map(function (key) {
            return (
                <div key={key} className="col-lg-3 col-md-3 col-sm-4 col-xs-6">
                    <div className="release">
                        <h3><span>{myReleases[key]["name"]} <br/> ({myReleases[key]["type"]})</span></h3>
                        <img src={myReleases[key]["art"]} className="img-responsive thumbnail" role="presentation"/>
                    </div>
                    <a className="myButton" href={myReleases[key]["buy"]}>BUY</a>
                </div>
            )
        });

        return (
            <div className="main-container">
                <br />
                <div className="container">
                    <Nav />
                </div>

                <div className="container">
                    <FeaturedRelease />
                    <hr />
                </div>

                <div className="container">
                    {releaseList}
                </div>
            </div>
        )
    }
}
;

Discography.defaultProps = {
    releases: []
};

export default Discography;