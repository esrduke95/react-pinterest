import React from 'react';
import firebase from 'firebase/app';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

// import fbConnection from '../helpers/data/connection';
import MyNavbar from '../components/MyNavbar';
import Home from '../components/Views/Home';
import Boards from '../components/Views/Boards';
import BoardForm from '../components/Views/BoardForm';
import PinDetails from '../components/Views/PinDetails';
import PinForm from '../components/Views/PinForm';
import Pins from '../components/Views/Pins';
import SingleBoard from '../components/Views/SingleBoard';

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;
    return (
      <div className="App">
        <MyNavbar authed={authed} />
        <Router>
          <Switch>
            <Route exact path='/' component={() => <Home authed={authed} />} />
            <Route exact path='/boards' component={() => <Boards />} />
            <Route exact path='/boardForm' component={() => <BoardForm />} />
            <Route exact path='/pinDetails' component={() => <PinDetails />} />
            <Route exact path='/pinForm' component={() => <PinForm />} />
            <Route exact path='/pins' component={() => <Pins />} />
            <Route exact path='/singleBoard' component={() => <SingleBoard />} />
            <Route component={() => <Home authed={authed} />} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
