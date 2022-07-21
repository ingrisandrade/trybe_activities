import React from "react";

class App extends React.Component {
  constructor() {
    super()

    this.buttonClick = this.buttonClick.bind(this);

    console.log('Component being built');
  }

  buttonClick() {
    console.log(this);
    console.log('clicked on the button');
  }
  render() {
    console.log(this);
    return <button onClick={ this.buttonClick }>Click Here</button>
  }
}

export default App;