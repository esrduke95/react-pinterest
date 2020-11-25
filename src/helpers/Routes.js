import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Views/Home';
import BoardForm from '../components/Views/BoardForm';
import Boards from '../components/Views/Boards';
import PinDetails from '../components/Views/PinDetails';
import PinForm from '../components/Views/PinForm';
import Pins from '../components/Views/Pins';
import SingleBoard from '../components/Views/SingleBoard';
import NotFound from '../components/Views/NotFound';
import SearchResults from '../components/Views/SearchResults';

export default function Routes({ user }) {
  return (
      <Switch>
        <Route
          exact
          path='/'
          component={() => <Home user={user} />}
        />
        <Route
          exact
          path='/pin-details'
          component={() => <PinDetails user={user} />}
        />
        <Route
          exact
          path='/pins'
          component={() => <Pins user={user} />}
        />
        <Route
          exact
          path='/pin-form'
          component={() => <PinForm user={user} />}
        />
        <Route
          exact
          path='/boards/:id'
          component={(props) => <SingleBoard user={user} {...props} />}
        />
        <Route
          exact
          path='/search/:term/:type'
          component={(props) => <SearchResults {...props} />}
        />
        <Route
          exact
          path='/board-form'
          component={() => <BoardForm user={user} />}
        />
        <Route
          exact
          path='/boards'
          component={() => <Boards user={user} />}
        />
        <Route component={NotFound} />
      </Switch>
  );
}
