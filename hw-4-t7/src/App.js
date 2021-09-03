import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = { show: true, name: "Иван" };
    this.handleClick = this.handleClick.bind(this);
  }

  sayHello() {
    return <p>Привет, {this.state.name}!</p>;
  }

  sayGoodBye() {
    return <p>Пока, {this.state.name}!</p>;
  }

  handleClick() {
    this.setState(prevState => ({
      show: !prevState.show,
    }));
  }

  render() {
    return (
      <div>
        {this.state.show ? this.sayHello() : this.sayGoodBye()}
        <button onClick={this.handleClick}>Change state.show statement</button>
      </div>
    );
  }
}

export default App;
