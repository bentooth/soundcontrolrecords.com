import React from 'react'
import {Link} from 'react-router';

export default class Nav extends React.Component{
    constructor(props){
        super(props);
        this.initialState = {
                boxShadow: '5px 5px 0px black',
                top: '0px', 
                left: '0px'
        };
        this.state = {
            news: this.initialState,
            discography: this.initialState,
            artists: this.initialState
        };
        this.menus = [ 'news', 'discography', 'artists'];
    }
    pressed(type){
        switch(type){
            case 'news':
                this.setState({ news: { boxShadow: '0px 0px 0px black', top: '2px', left: '2px' }});
                break;
            case 'discography':
                this.setState({ discography: { boxShadow: '0px 0px 0px black', top: '2px', left: '2px' }});
                break;
            case 'artists':
                this.setState({ artists: { boxShadow: '0px 0px 0px black', top: '2px', left: '2px' }});
                break;
            default:
        }
    }
    lift(type){
        switch(type){
            case 'news':
                this.setState({ news: { boxShadow: '0px 0px 0px black', top: '0px', left: '0px' }});
                break;
            case 'discography':
                this.setState({ discography: { boxShadow: '0px 0px 0px black', top: '0px', left: '0px' }});
                break;
            case 'artists':
                this.setState({ artists: { boxShadow: '0px 0px 0px black', top: '0px', left: '0px' }});
                break;
            default:
        }
    }
    makeList(){
        let tempMenu = this.menus.map(menu => {
            return (
                <Link to={ "/"+(menu === 'news'? '': menu)}>
                    <li>
                        <div onMouseUp={ (e) => { this.lift() }} onMouseDown={ (e) => { this.pressed(menu) }} style={ this.state[menu]}>
                            <span>{menu.toUpperCase()}</span>
                        </div>
                    </li>
                </Link>);
        });
        return (<div><ul className="nav-menu">{ tempMenu }</ul></div>);
    }
    render(){
        return (
        <nav className="navbar navbar-collapse" role="navigation">
            <div>
                <div className="nav-header">
                    <a href="/"><img src='images/sound-control-logo.png' role="presentation"/></a>
                </div>

                <div className="menu-wrapper">
                    { this.makeList() }
                </div>
            </div>
        </nav>
        );
    }
};
