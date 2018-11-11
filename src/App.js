import React, { Component } from 'react';
import Table from './components/table/Table.js';
import './App.css';
// in case API doesn't work uncomment this and comment componentDidMount 
// import testData from './test-data.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.filterType = this.filterType.bind(this);
    this.filterFlights = this.filterFlights.bind(this);
    this.filterStatus = this.filterStatus.bind(this);

    // Test data
    this.initial = {
      data: [] // testData
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
      console.error('Error');
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
    const searchResult = this.initial.data.filter(function (item) {
      return item.flight.number
        .toString()
        .toLowerCase()
        .indexOf(event.currentTarget.value.toString().toLowerCase()) !== -1;
    })
    this.setState({ data: searchResult });
  }
}

export default App;
