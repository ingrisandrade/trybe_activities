import React, { Component } from 'react'

class Timer extends Component {

  constructor() {
    super();
    console.log('constructor()');
  }

  componentDidMount() {
    console.log('componentDidMount()');
  }
  
  componentDidUpdate() {
    console.log('componentDidUpdate()');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount()');
  }

  render() {
    console.log('render()');
    return (
      <section>
        Componente Timer
      </section>
    );
  }
}

export default Timer;