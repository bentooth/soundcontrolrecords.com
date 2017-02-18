import React from 'react';

const Releases = ({releases}) => {

    const myReleases = releases;

    const releaseList = Object.keys(myReleases).map(function(key) {
        return (
            <div key={key}>
                <h3 id="releaseTitle">{myReleases[key]["name"]} ({myReleases[key]["type"]})</h3>
                <img src={myReleases[key]["art"]} className="img-responsive thumbnail" role="presentation"/>
                <button className="myButton" href={myReleases[key]["buy"]}>Buy</button>
                <hr />
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
