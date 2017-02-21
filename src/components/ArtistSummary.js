import React from 'react';
import {Link} from 'react-router';

export default class ArtistSummary extends React.Component {
    constructor(props){
        super(props);
    }
    propagateArtist(){
        let tempArtists = this.props.artists.map((artist, index) => {
            let styler = {
                backgroundPosition: '50% 60%',
                backgroundImage: 'url('+ artist.header + ')',
            };
            return ( <Link to={artist.path}>
                    <div style={ styler } className='artist-header col-lg-12 col-md-12 img-responsive' role="presentation" key={index}>
                            <h1>{artist.name}</h1>
                    </div>
                </Link> );
        });
        return (<div> { tempArtists } </div>);
    }
    didComponentMount(){
            setInterval(function(){
                console.log(window.scrollY);
            }, 1000);
    }
    render(){
        console.log(this.props);
        return (<div> 
                    { this.propagateArtist() }
               </div>);
    }
}
/*

*/