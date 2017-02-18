import React from 'react';
import Nav from '../components/Nav';
import ArtistSummary from '../components/ArtistSummary';
import Axios from 'axios';

class Artists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            artists: []
        }
    }

    componentDidMount() {
        Axios.get("http://localhost:3000/data.json")
            .then((result) => {
                this.setState({
                    artists: result.data.artists
                });
            })
    }

    render() {
        return (
            <div className="main-container">
                    <br />
                    <div className="container">
                        <Nav />
                    </div>

                    <div className="container">
                        <h1 className="page-header">ARTISTS</h1>
                    </div>

                    <div className="container">
                        <ArtistSummary artists={this.state.artists}/>
                    </div>
            </div>
        )
    }
};

export default Artists