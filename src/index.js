import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import Artists from './components/Artists';
import ArtistProfile from './components/ArtistProfile'
import Discography from './components/Discography';
import { browserHistory, Router, Route } from 'react-router'

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={Main} />
        <Route path='artists' component={Artists} />
        <Route path='discography' component={Discography} />
        <Route path=':username' component={ArtistProfile}/>
    </Router>,
  document.getElementById('root')
);
