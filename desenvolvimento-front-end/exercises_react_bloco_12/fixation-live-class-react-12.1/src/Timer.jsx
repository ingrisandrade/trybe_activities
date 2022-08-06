import React, { Component } from 'react'

const oneSecond = 1000;

class Timer extends Component {

  constructor() {
    super();
    console.log('constructor()');
  }

  state = {
    seconds: 0,
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
  }

  componentWillUnmount() {
    console.log('componentWillUnmount()');
  }

  render() {
    console.log('render()');

    const { seconds } = this.setState

    return (
      <section>
        <h1>Fase da respiração</h1>
        <h2>{ seconds }</h2>
      </section>
    );
  }
}

export default Timer;