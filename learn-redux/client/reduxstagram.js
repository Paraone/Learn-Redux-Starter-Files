import React from 'react';
import {render} from 'react-dom';
import css from './styles/style.styl';
import Main from './components/main';
import Single from './components/single';
import Photogrid from './components/photogrid';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Photogrid}></IndexRoute>
      <Route path="/view/:postId" component={Single}></Route>
    </Route>
  </Router>
)

render(router, document.getElementById('root'));
