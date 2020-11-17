import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import Home from '../components/Views/Home';
import BoardForm from '../components/Views/BoardForm';
import Boards from '../components/Views/Boards';
import PinDetails from '../components/Views/PinDetails';
import PinForm from '../components/Views/PinForm';
import Pins from '../components/Views/Pins';
import SingleBoard from '../components/Views/SingleBoard';

export default function Routes({ user }) {
  return (
      <Switch>
        <Route exact path='/' component={() => <Home user={user} />} />
        <Route exact path='/boards' component={() => <Boards user={user} />} />
        <Route exact path='/boards/:id' component={(props) => <SingleBoard user={user} {...props}/>} />
        <Route exact path='/pins' component={() => <Pins user={user} />} />
        <Route exact path='/boardForm' component={() => <BoardForm user={user} />} />
        <Route exact path='/pinDetails' component={() => <PinDetails user={user} />} />
        <Route exact path='/pinForm' component={() => <PinForm user={user} />} />
        <Route exact path='/singleBoard' component={() => <SingleBoard user={user} />} />
        <Route component={() => <Home user={user} />} />
      </Switch>
  );
}
