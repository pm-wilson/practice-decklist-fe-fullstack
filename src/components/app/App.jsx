import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import ListController from '../../components/controller/ListController';
import DetailController from '../../components/controller/DetailController';

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            component={ListController}
          />
          <Route
            path="/details/:id"
            exact
            component={DetailController}
          />
        </Switch>
      </Router>
    </div>
  );
}
