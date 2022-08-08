import React, { Component } from 'react';
import { BroserRouter, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import HowTo from './HowTo';
import Profile from './Profile';

class App extends Component {
  render() {
    return (
      <BroserRouter>
        <Route path="/about" component={About} />
        <Route path="/howto" component={HowTo} />
        <Route path="/profile"><Profile /></Route>
        <Route exact path="/" component={Home} />
      </BroserRouter>
    );
  }
}

export default App;