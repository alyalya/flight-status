import React, { Component } from 'react';
// import Arrivals from './components/arrivals/arrivals.js';
import Table from './components/table/Table.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.filterType = this.filterType.bind(this);
    this.filterFlights = this.filterFlights.bind(this);
    this.filterStatus = this.filterStatus.bind(this);

    // Test data
    this.initial = {
      data: [{
        "type": "arrival",
        "status": "cancelled",
        "departure": {
          "iataCode": "JFK",
          "icaoCode": "KJFK",
          "scheduledTime": "2017-12-11T01:06:00.000",
          "estimatedRunway": "2017-12-11T02:07:00.000",
          "actualRunway": "2017-12-11T02:07:00.000"
        },
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
          "actualRunway": "2017-12-11T02:07:00.000"
        },
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
          "number": "432302",
          "iataNumber": "5Y302",
          "icaoNumber": "GTI302"
        }
      },
      {
        "type": "arrival",
        "status": "landed",
        "departure": {
          "iataCode": "ULY",
          "icaoCode": "KJFK",
          "scheduledTime": "2017-13-11T01:08:00.000",
          "estimatedRunway": "2017-12-11T02:07:00.000",
          "actualRunway": "2017-12-11T02:07:00.000"
        },
        "arrival": {
          "iataCode": "VKO",
          "icaoCode": "KCVG",
          "estimatedRunway": "2017-03-11T06:30:00.000",
          "actualRunway": "2017-12-11T03:38:00.000"
        },
        "airline": {
          "name": "Gatlas Gir",
          "iataCode": "5Y",
          "icaoCode": "GTI"
        },
        "flight": {
          "number": "354602",
          "iataNumber": "5Y302",
          "icaoNumber": "GTI302"
        }
      },
      {
        "type": "departure",
        "status": "cancelled",
        "departure": {
          "iataCode": "VKO",
          "icaoCode": "KJFK",
          "scheduledTime": "2017-12-11T01:06:00.000",
          "estimatedRunway": "2017-12-11T02:07:00.000",
          "actualRunway": "2017-12-11T02:07:00.000"
        },
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
          "number": "432302",
          "iataNumber": "5Y302",
          "icaoNumber": "GTI302"
        }
      },
      {
        "type": "arrival",
        "status": "landed",
        "departure": {
          "iataCode": "ULY",
          "icaoCode": "KJFK",
          "scheduledTime": "2017-13-11T01:08:00.000",
          "estimatedRunway": "2017-12-11T02:07:00.000",
          "actualRunway": "2017-12-11T02:07:00.000"
        },
        "arrival": {
          "iataCode": "VKO",
          "icaoCode": "KCVG",
          "estimatedRunway": "2017-03-11T06:30:00.000",
          "actualRunway": "2017-12-11T03:38:00.000"
        },
        "airline": {
          "name": "Gatlas Gir",
          "iataCode": "5Y",
          "icaoCode": "GTI"
        },
        "flight": {
          "number": "354602",
          "iataNumber": "5Y302",
          "icaoNumber": "GTI302"
        }
      },
      {
        "type": "arrival",
        "status": "cancelled",
        "departure": {
          "iataCode": "ULY",
          "icaoCode": "KJFK",
          "scheduledTime": "2017-13-11T01:08:00.000",
          "estimatedRunway": "2017-12-11T02:07:00.000",
          "actualRunway": "2017-12-11T02:07:00.000"
        },
        "arrival": {
          "iataCode": "VKO",
          "icaoCode": "KCVG",
          "estimatedRunway": "2017-03-11T06:30:00.000",
          "actualRunway": "2017-12-11T03:38:00.000"
        },
        "airline": {
          "name": "Gatlas Gir",
          "iataCode": "5Y",
          "icaoCode": "GTI"
        },
        "flight": {
          "number": "354602",
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
          "actualRunway": "2017-12-11T02:07:00.000"
        },
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
          "number": "432302",
          "iataNumber": "5Y302",
          "icaoNumber": "GTI302"
        }
      },
      {
        "type": "departure",
        "status": "cancelled",
        "departure": {
          "iataCode": "VKO",
          "icaoCode": "KJFK",
          "scheduledTime": "2017-12-11T01:06:00.000",
          "estimatedRunway": "2017-12-11T02:07:00.000",
          "actualRunway": "2017-12-11T02:07:00.000"
        },
        "arrival": {
          "iataCode": "JFK",
          "icaoCode": "KCVG",
          "estimatedRunway": "2017-12-11T03:38:00.000",
          "actualRunway": "2018-11-11T03:38:00.000"
        },
        "airline": {
          "name": "AtlGHghas Air",
          "iataCode": "5Y",
          "icaoCode": "GTI"
        },
        "flight": {
          "number": "30dfs2",
          "iataNumber": "5Y302",
          "icaoNumber": "GTI302"
        }
      },
      {
        "type": "arrival",
        "status": "cancelled",
        "departure": {
          "iataCode": "JFK",
          "icaoCode": "KJFK",
          "scheduledTime": "2017-12-11T01:06:00.000",
          "estimatedRunway": "2017-12-11T02:07:00.000",
          "actualRunway": "2017-12-11T02:07:00.000"
        },
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
          "actualRunway": "2017-12-11T02:07:00.000"
        },
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
          "number": "432302",
          "iataNumber": "5Y302",
          "icaoNumber": "GTI302"
        }
      },
      {
        "type": "arrival",
        "status": "landed",
        "departure": {
          "iataCode": "ULY",
          "icaoCode": "KJFK",
          "scheduledTime": "2017-13-11T01:08:00.000",
          "estimatedRunway": "2017-12-11T02:07:00.000",
          "actualRunway": "2017-12-11T02:07:00.000"
        },
        "arrival": {
          "iataCode": "VKO",
          "icaoCode": "KCVG",
          "estimatedRunway": "2017-03-11T06:30:00.000",
          "actualRunway": "2017-12-11T03:38:00.000"
        },
        "airline": {
          "name": "Gatlas Gir",
          "iataCode": "5Y",
          "icaoCode": "GTI"
        },
        "flight": {
          "number": "354602",
          "iataNumber": "5Y302",
          "icaoNumber": "GTI302"
        }
      },
      {
        "type": "departure",
        "status": "cancelled",
        "departure": {
          "iataCode": "VKO",
          "icaoCode": "KJFK",
          "scheduledTime": "2017-12-11T01:06:00.000",
          "estimatedRunway": "2017-12-11T02:07:00.000",
          "actualRunway": "2017-12-11T02:07:00.000"
        },
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
          "number": "432302",
          "iataNumber": "5Y302",
          "icaoNumber": "GTI302"
        }
      },
      {
        "type": "arrival",
        "status": "landed",
        "departure": {
          "iataCode": "ULY",
          "icaoCode": "KJFK",
          "scheduledTime": "2017-13-11T01:08:00.000",
          "estimatedRunway": "2017-12-11T02:07:00.000",
          "actualRunway": "2017-12-11T02:07:00.000"
        },
        "arrival": {
          "iataCode": "VKO",
          "icaoCode": "KCVG",
          "estimatedRunway": "2017-03-11T06:30:00.000",
          "actualRunway": "2017-12-11T03:38:00.000"
        },
        "airline": {
          "name": "Gatlas Gir",
          "iataCode": "5Y",
          "icaoCode": "GTI"
        },
        "flight": {
          "number": "354602",
          "iataNumber": "5Y302",
          "icaoNumber": "GTI302"
        }
      },
      {
        "type": "arrival",
        "status": "scheduled",
        "departure": {
          "iataCode": "ULY",
          "icaoCode": "KJFK",
          "scheduledTime": "2017-13-11T01:08:00.000",
          "estimatedRunway": "2017-12-11T02:07:00.000",
          "actualRunway": "2017-12-11T02:07:00.000"
        },
        "arrival": {
          "iataCode": "VKO",
          "icaoCode": "KCVG",
          "estimatedRunway": "2017-03-11T06:30:00.000",
          "actualRunway": "2017-12-11T03:38:00.000"
        },
        "airline": {
          "name": "Gatlas Gir",
          "iataCode": "5Y",
          "icaoCode": "GTI"
        },
        "flight": {
          "number": "354602",
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
          "actualRunway": "2017-12-11T02:07:00.000"
        },
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
          "number": "432302",
          "iataNumber": "5Y302",
          "icaoNumber": "GTI302"
        }
      },
      {
        "type": "departure",
        "status": "cancelled",
        "departure": {
          "iataCode": "VKO",
          "icaoCode": "KJFK",
          "scheduledTime": "2017-12-11T01:06:00.000",
          "estimatedRunway": "2017-12-11T02:07:00.000",
          "actualRunway": "2017-12-11T02:07:00.000"
        },
        "arrival": {
          "iataCode": "JFK",
          "icaoCode": "KCVG",
          "estimatedRunway": "2017-12-11T03:38:00.000",
          "actualRunway": "2018-11-11T03:38:00.000"
        },
        "airline": {
          "name": "AtlGHghas Air",
          "iataCode": "5Y",
          "icaoCode": "GTI"
        },
        "flight": {
          "number": "30dfs2",
          "iataNumber": "5Y302",
          "icaoNumber": "GTI302"
        }
      }
      ]
    }

    this.state = {
      data: []
    };

  }

  componentDidMount() {
    var arrivalPromise = fetch('http://aviation-edge.com/v2/public/timetable?key=b4c850-ddddeb&iataCode=VKO&type=arrival').then(res => res.json());
    var departurePromise = fetch('http://aviation-edge.com/v2/public/timetable?key=b4c850-ddddeb&iataCode=VKO&type=departure').then(res => res.json());

    Promise.all([arrivalPromise, departurePromise]).then(results => {
      var commonResult = results[0].concat(results[1]);

      this.initial = { data: commonResult };
      this.setState({ data: this.initial.data });
    }).catch(() => {
      console.error('oh-oh');
    });

  }

  render() {
    return (
      <div>
        <div className="filter">
          <div className="filter__type">
            <button className="filter__status" onClick={() => this.filterType('departure')}>Departure</button>
            <button className="filter__status" onClick={() => this.filterType('arrival')}>Arrival</button>
            <button className="filter__status" onClick={this.filterStatus}>Scheduled</button>
          </div>
          <input className="filter__search" placeholder="Search by flight number" onChange={this.filterFlights} />
        </div>
        <Table flightData={this.state.data} />
      </div>
    )
  }

  filterType(type) {
    const arr = this.initial.data.filter(function (item) {
      return item.type === type;
    });
    this.setState({ data: arr });
  }

  filterStatus() {
    const arr = this.initial.data.filter(function (item) {
      return item.status === 'scheduled';
    });
    this.setState({ data: arr });
  }

  filterFlights(event) {
    var searchResult = this.initial.data.filter(function (item) {
      return item.flight.number
        .toString().toLowerCase().indexOf(event.currentTarget.value.toString().toLowerCase()) !== -1;
    })
    this.setState({ data: searchResult });
  }
}

export default App;
