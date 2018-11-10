import React from 'react';
// import Arrivals from '../arrivals/arrivals.js';
// import Departures from '../departures/departures.js';
// import Cancellations from '../cancelled/cancelled.js';


class Table extends React.Component {

    constructor(props) {
        super(props);   
    }

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
                {this.generateLine(4)}
            </tbody>
        </table>
        )
        
    }

    generateLine(j) {

        const data = this.props.flightData;

        var arr = [];
        if (data.type === 'arrival') {
            for (var i = 0; i < j; i++) {
                arr.push(
                    <tr>
                        <td>{data[i].arrival.estimatedRunway}</td>
                        <td>{data[i].departure.iataCode}</td>
                        <td>{data[i].flight.number}</td>
                        <td>{data[i].status}</td>
                    </tr>)
            } 
        } else {
            for (var k = 0; k < j; k++) {
                arr.push(
                    <tr status={data[k].status}>
                        <td>{data[k].departure.scheduledTime}</td>
                        <td>{data[k].arrival.iataCode}</td>
                        <td>{data[k].flight.number}</td>
                        <td>{data[k].status}</td>
                    </tr>)
            } 
        }
        return arr;
    }
}

export default Table;
