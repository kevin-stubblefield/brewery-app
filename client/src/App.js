import React, { Component } from 'react';
import Map from './components/map/map.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      response: ''
    };
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res[0].name }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/breweries');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.state.response}
        </p>
        <Map />
      </div>
    );
  }
}

export default App;
