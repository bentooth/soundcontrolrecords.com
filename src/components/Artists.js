import React from 'react';
import Nav from '../components/Nav';
import ArtistSummary from '../components/ArtistSummary';
import { artists } from '../data.json';

class Artists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
    };
  }

  componentDidMount() {
    this.setState({
      artists: artists,
    });
  }

  render() {
    return (
      <div className='main-container'>
        <br />
        <div className='container'>
          <Nav />
        </div>

        <div className='container'>
          <div className='page-header'>
            <h1>ARTISTS</h1>
          </div>
        </div>

        <div className='container'>
          <ArtistSummary artists={this.state.artists} />
        </div>
      </div>
    );
  }
}

export default Artists;
