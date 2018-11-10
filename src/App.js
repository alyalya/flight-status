import React, { Component } from 'react';
// import Arrivals from './components/arrivals/arrivals.js';
import Table from './components/table/table.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }

  }

  render() {
    return (
      <div><Table/></div>
    )
  }
}

export default App;
