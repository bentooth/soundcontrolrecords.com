import React from 'react';
import FeaturedRelease from '../components/FeaturedRelease';
import Nav from '../components/Nav';
import MusicPlayer from '../components/MusicPlayer/music-player';
import { artists } from '../data.json';

class Discography extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: null,
      releases: [],
    };

    this.loadComponent = this.loadComponent.bind(this);
  }

  loadComponent() {
    const myReleases = this.state.releases;
    const releaseList = Object.keys(myReleases).map(function(key) {
      return (
        <div key={key} className='col-lg-3 col-md-3 col-sm-4 col-xs-6'>
          <div className='release'>
            <MusicPlayer
              components={['play', 'stop']}
              initialColor='rgba(0,0,0,1)'
              activeColor='rgba(200,200,200,1)'
              id={key}
              src={myReleases[key]['audio']}
            />
            <h3>
              <span>
                {myReleases[key]['name']} <br /> ({myReleases[key]['type']})
              </span>
            </h3>
            <img
              src={myReleases[key]['art']}
              className='img-responsive thumbnail'
              role='presentation'
            />
          </div>
          <a className='myButton text-break' href={myReleases[key]['buy']}>
            BUY
          </a>
        </div>
      );
    });
    return <div>{releaseList}</div>;
  }
  componentDidMount() {
    let releases = [];

    artists.forEach((artist) => {
      releases = [...releases, ...artist.releases];
    });

    this.setState({ releases: releases });
  }

  render() {
    return (
      <div className='main-container'>
        <br />
        <div className='container'>
          <Nav />
        </div>

        <div className='container'>
          <FeaturedRelease />
          <hr />
        </div>

        <div className='container'>{this.loadComponent()}</div>
      </div>
    );
  }
}

Discography.defaultProps = {
  releases: [],
};

export default Discography;
