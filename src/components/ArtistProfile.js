import React from 'react';
import Nav from '../components/Nav';
import Axios from 'axios';
import About from '../components/About';
import Links from '../components/Links';
import Releases from '../components/Releases';
import SC from 'soundcloud';

class ArtistProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            artists: [],
            embed: null,
        }
    }

    componentDidMount() {
        //Axios.get("http://soundcontrolrecords.com/data.json")
        Axios.get("http://localhost:3000/data.json")
            .then((result) => {
                let artists = result.data.artists;
                for (let i = 0; i < artists.length; i++) {
                    if (this.props.params.username === artists[i].id) {
                        this.setState({
                            artists: artists[i],
                            embed: artists[i].embed
                        });

                        SC.initialize({client_id: 'qar87rq7vEGGfgjM0PqrmTBUYhSzUcQ5'});
                        SC.oEmbed(this.state.embed, {element: document.getElementById('sc-embed')});
                    }
                }
            });
    }

    render() {
        return (
            <div className="main-container">
                    <br />
                    <div className="container">
                        <Nav />
                    </div>
                    <div className="container">

                        <h1 className="page-header">{this.state.artists.name}</h1>

                        <div style={{
                                    backgroundImage: 'url(' + this.state.artists.profile + ')',
                                    backgroundPosition: '50% 20%'
                                 }}
                             className='artist-profile-header col-lg-12 col-md-12 img-responsive' role="presentation">
                            <Links links={this.state.artists.links} />
                        </div>

                        <div className="col-md-9">
                            <h2>ABOUT</h2>
                            <hr />

                            <div id="sc-embed"></div>
                            <br />
                            <About artists={this.state.artists}/><br/>
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" src={this.state.artists.youtube}></iframe>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <h2>RELEASES</h2>
                            <hr />
                            <Releases releases={this.state.artists.releases}/>

                        </div>
                    </div>
                </div>
        )
    }
}

ArtistProfile.defaultProps = {
    artists: [],
    feature: ""
};

export default ArtistProfile
