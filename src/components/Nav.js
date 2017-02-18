import React from 'react'
import {Link} from 'react-router';

const Nav = () => {
    return (
        <nav className="navbar" role="navigation">
            <div>
                <div className="nav-header">
                    <a href="/"><img src='images/sound-control-logo.png' role="presentation"/></a>
                </div>

                <div className="menu-wrapper">
                    <ul className="nav-menu">
                        <li>
                            <Link to="/">NEWS</Link>
                        </li>
                        <li>
                            <Link to="/discography">DISCOGRAPHY</Link>
                        </li>
                        <li>
                            <Link to="/artists">ARTISTS</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Nav;
