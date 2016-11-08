import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, useRouterHistory, browserHistory, IndexRoute} from 'react-router';
import {createHashHistory} from 'history';
import Home from './containers/home';

let appHistory = browserHistory;

ReactDOM.render(
    <Router history={appHistory} onUpdate={() => window.scrollTo(0, 0)}>

      <Route path="/" component={props => <div>{props.children}</div>}>
        <IndexRoute component={Home}/>
        <Route path="dashboard" getComponent={(nextState, cb) => {
          require.ensure([], function(require) {
            cb(null, require('./containers/dashboard').default)
          }, "dashboard")
        }}/>
        />
        <Route path="admin" getComponent={(nextState, cb) => {
          require.ensure([], function(require) {
            cb(null, require('./containers/admin').default)
          }, "admin")
        }}/>
      </Route>

    </Router>
, document.getElementById('content'));
