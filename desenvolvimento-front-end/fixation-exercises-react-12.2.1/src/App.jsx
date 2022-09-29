import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import HowTo from './HowTo';
import Profile from './Profile';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/about" component={About} />
        <Route path="/howto" component={HowTo} />
        <Route path="/profile" render={() => < Profile name="Este texto foi renderizado através de props" /> } />
        <Route exact path="/" component={Home} />
      </BrowserRouter>
    );
  }
}

export default App;
