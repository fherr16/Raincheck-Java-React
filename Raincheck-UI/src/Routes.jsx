import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router';
import UserController from './user/UserController.jsx';
import HomeController from './home/HomeController.jsx';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

const routes = (
  <Switch>
    <Route path='/userList' component={UserController} />
    <Route path="/" component={HomeController} exact />
    <Route>
      <Redirect to='/' />
    </Route>
  </Switch>
);

const Root = () => (
  <Router history={history}>
    <Switch>
      {routes}
    </Switch>
  </Router>
);

export default Root;
