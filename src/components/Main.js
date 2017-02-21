import React from 'react';
import FeaturedRelease from '../components/FeaturedRelease';
import News from '../components/News';
import Nav from '../components/Nav';

const Main = () => {
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
                <div className="col-lg-12 col-md-12 page-header">
                    <h1> LATEST NEWS </h1>
                </div>
            </div>

            <div className="container">
                <News />
            </div>
        </div>
    )
};

export default Main