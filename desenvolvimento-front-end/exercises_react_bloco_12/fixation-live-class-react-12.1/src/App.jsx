import React, { Component } from 'react';
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
        { showTimer && <Timer /> }
        
        <button onClick={ this.toggleTimer }>
          { showTimer ? 'Esconder Timer' : 'Mostrar Timer' }
        </button>
      </div>
    )
  }
}

export default App;
