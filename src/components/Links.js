import React from 'react';

const Links = ({links}) => {

    const myLinks = links;

    const socialIcons = Object.keys(myLinks).map(function (key) {
        const btn = `btn btn-social-icon btn-${key}`;
        const fa = `fa fa-${key}`;

        return (
            <div key={key}>
                <a className={btn} href={myLinks[key]}>
                    <span className={fa}> {key}</span>
                </a>
            </div>
        )
    });

    return (
        <div>{socialIcons}</div>
    )

};

Links.defaultProps = {
    links: {}
};

export default Links;
