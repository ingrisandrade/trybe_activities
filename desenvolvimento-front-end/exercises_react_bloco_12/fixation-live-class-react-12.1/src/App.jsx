import React, { Component } from 'react';
import './App.css';
import Timer from './Timer';

class App extends Component {
  state = {
    showTimer: false,
  }

  toggleTimer = () => {
    this.setState((prevState) => {
      const previousShowTimer = prevState.showTimer;

      return {
        showTimer: !previousShowTimer
      }
    });
  }

  render() {
    const {
      showTimer,
    } = this.state;
    
    return (
      <div>
        {/* <header>
          <img src={ logo } className="App-logo" alt="logo" />
        </header> */}

        { showTimer && <Timer /> }
        
        <button onClick={ this.toggleTimer }>
          { showTimer ? 'Esconder Timer' : 'Mostrar Timer' }
        </button>
      </div>
    );
  }
}

export default App;
