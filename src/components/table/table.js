import React from 'react';
import Arrivals from '../arrivals/arrivals.js';
import Departures from '../departures/departures.js';


class Table extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: ''
        }
    }
    render() {
        return (
        <div>
        <button className="status">Departure</button>
        <button className="status">Arrival</button>
        <table>
            <thead>
                <tr>
                    <th>Time</th>
                    <th>Airport</th> 
                    <th>Flight</th>
                    <th>Status</th>
                </tr>
            </thead>
            <Arrivals/>
        </table>
        </div>
    )}
}

export default Table;
