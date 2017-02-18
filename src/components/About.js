import React from 'react';

const About = ({artists}) => {
    return(
        <div>
            <p>{artists.bio}</p>
        </div>
    )
};

export default About;
