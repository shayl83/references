import React, { Component } from "react";
import ReactDOM from 'react-dom';
import style from '../scss/main.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  componentDidMount() {
    this.interval = setInterval(
      this.increment.bind(this),
      1000
    )
  }

  increment() {
    this.setState(({ counter }) => {
      return {counter: counter + 1};
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const { counter } = this.state;

    return (
      <header>
        <div className="test">Webpack is doing its thing with React and ES2015</div>
        <div>{counter} stacey changed in intellij</div>
      </header>
    );
  }
}