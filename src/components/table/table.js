import React from 'react';
// import Arrivals from '../arrivals/arrivals.js';
// import Departures from '../departures/departures.js';
// import Cancellations from '../cancelled/cancelled.js';


class Table extends React.Component {

    render() {
        return (
            <table>
            <thead>
                <tr>
                    <th>Time</th>
                    <th>Airport</th> 
                    <th>Flight</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {this.generateLine()}
            </tbody>
        </table>
        )
        
    }

    generateLine() {

        const data = this.props.flightData;

        if (data.length === 0) {
            return null;
        }

        var arr = [];

        data.forEach(item => {
            if (item.type === 'arrival') {
                    arr.push(
                        <tr>
                            <td>{item.arrival.estimatedRunway}</td>
                            <td>{item.departure.iataCode}</td>
                            <td>{item.flight.number}</td>
                            <td>{item.status}</td>
                        </tr>)

            } else if (item.type === 'departure') {
                    arr.push(
                        <tr>
                            <td>{item.departure.scheduledTime}</td>
                            <td>{item.arrival.iataCode}</td>
                            <td>{item.flight.number}</td>
                            <td>{item.status}</td>
                        </tr>)
            }
        });
        
        return arr;
    }
}

export default Table;
