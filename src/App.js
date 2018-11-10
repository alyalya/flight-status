import React, { Component } from 'react';
// import Arrivals from './components/arrivals/arrivals.js';
import Table from './components/table/table.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }

    this.data = 
    [{ 
        "type": "arrival", 
        "status": "landed", 
        "departure": { 
        "iataCode": "JFK", 
        "icaoCode": "KJFK", 
        "scheduledTime": "2017-12-11T01:06:00.000", 
        "estimatedRunway": "2017-12-11T02:07:00.000", 
        "actualRunway": "2017-12-11T02:07:00.000" }, 
        "arrival": { 
        "iataCode": "VKO", 
        "icaoCode": "KCVG", 
        "estimatedRunway": "2017-12-11T03:38:00.000", 
        "actualRunway": "2017-12-11T03:38:00.000" 
        }, 
        "airline": { 
        "name": "Atlas Air", 
        "iataCode": "5Y", 
        "icaoCode": "GTI" 
        }, 
        "flight": { 
        "number": "302", 
        "iataNumber": "5Y302", 
        "icaoNumber": "GTI302" 
        }
      },
      { 
        "type": "departure", 
        "status": "landed", 
        "departure": { 
        "iataCode": "VKO", 
        "icaoCode": "KJFK", 
        "scheduledTime": "2017-12-11T01:06:00.000", 
        "estimatedRunway": "2017-12-11T02:07:00.000", 
        "actualRunway": "2017-12-11T02:07:00.000" }, 
        "arrival": { 
        "iataCode": "CVG", 
        "icaoCode": "KCVG", 
        "estimatedRunway": "2017-12-11T03:38:00.000", 
        "actualRunway": "2017-12-11T03:38:00.000" 
        }, 
        "airline": { 
        "name": "Atlas Air", 
        "iataCode": "5Y", 
        "icaoCode": "GTI" 
        }, 
        "flight": { 
        "number": "302", 
        "iataNumber": "5Y302", 
        "icaoNumber": "GTI302" 
        }
      },
      { 
        "type": "departure", 
        "status": "landed", 
        "departure": { 
        "iataCode": "VKO", 
        "icaoCode": "KJFK", 
        "scheduledTime": "2017-12-11T01:06:00.000", 
        "estimatedRunway": "2017-12-11T02:07:00.000", 
        "actualRunway": "2017-12-11T02:07:00.000" }, 
        "arrival": { 
        "iataCode": "JFK", 
        "icaoCode": "KCVG", 
        "estimatedRunway": "2017-12-11T03:38:00.000", 
        "actualRunway": "2017-12-11T03:38:00.000" 
        }, 
        "airline": { 
        "name": "Atlas Air", 
        "iataCode": "5Y", 
        "icaoCode": "GTI" 
        }, 
        "flight": { 
        "number": "302", 
        "iataNumber": "5Y302", 
        "icaoNumber": "GTI302" 
        }
      }
    ]
  }

  render() {
    return (
      <div><Table/></div>
    )
  }
}

export default App;
