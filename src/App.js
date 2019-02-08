import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Game from './components/Game/Game';
import {Switch, Route} from 'react-router-dom';

class App extends Component {
  state = {
    name: ''
  }

  changeName = (name) => {
    this.setState({name});
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={ props => <Home {...props} changeName={this.changeName} /> } />
          <Route path="/game" render={ props => <Game {...props} name={this.state.name} /> } />
        </Switch>
      </div>
    );
  }
}

export default App;
