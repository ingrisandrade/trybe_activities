import React, { Component } from 'react'

const oneSecond = 1000;
const timeLimit = 5;

class Timer extends Component {

  constructor() {
    super();
    console.log('constructor()');
  }

  state = {
    seconds: 0,
    phases: ['🫁 Inspire...', '🤐 Segure...', '😮‍💨 Expire...'],
    currentPhaseIndex: 0,
  }

  componentDidMount() {
    console.log('componentDidMount()');

    setInterval(() => {
      this.setState((prevState) => ({ seconds: prevState + 1 }));
      // Dessa forma não precisa usar o return.
    }, oneSecond);
  }
  
  componentDidUpdate() {
    console.log('componentDidUpdate()');

    const { seconds } = this.state;
    if(seconds === 5) {
      this.setState((prevState) => {
        const previousIndex = prevState.currentPhaseIndex;
        // const { currentPhaseIndex: previousIndex } = prevState; desestruturando.
        return {
          seconds: 0,
          currentPhaseIndex: previousIndex < 2 ? previousIndex + 1 : 0
        }
      });
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount()');
  }

  render() {
    console.log('render()');

    const { seconds, phases, currentPhaseIndex } = this.setState

    return (
      <section>
        <h1>{ phases[currentPhaseIndex] }</h1>
        <h2>{ seconds }</h2>
      </section>
    );
  }
}

export default Timer;