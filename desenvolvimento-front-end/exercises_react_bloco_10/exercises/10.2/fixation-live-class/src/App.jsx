import React from 'react';
import './App.css';
import gamesList from './data';
import VideoGameList from './components/VideoGameList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <VideoGameList games={ gamesList } />
      </div>
    );
  }
}

export default App;
