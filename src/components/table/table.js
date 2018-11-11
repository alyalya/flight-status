import React from 'react';
import './style.css';

class Table extends React.Component {

    render() {
        return (
            <table className="table">
                <thead className="table__head">
                    <tr className="table__line">
                        <th className="table__cell table__cell_main">Date</th>                    
                        <th className="table__cell table__cell_main">Time</th>
                        <th className="table__cell table__cell_main">Airport</th> 
                        <th className="table__cell table__cell_main">Flight</th>
                        <th className="table__cell table__cell_main">Status</th>
                    </tr>
                </thead>
                <tbody className="table__body">
                    {this.generateLine()}
                </tbody>
            </table>
        )
    }

    generateLine() {

        var optionsDate = {
            month: 'long',
            day: 'numeric',
          };

        var optionsTime = {
            timezone: 'UTC',
            hour: 'numeric',
            minute: 'numeric',
          };

        var data = this.props.flightData;

        if (data.length === 0) {
            return null;
        }

        var arr = [];

        data.forEach(item => {
            if (item.type === 'arrival') {
                    arr.push(
                        <tr className="table__line">
                            <td className="table__cell">{new Date(Date.parse(item.arrival.estimatedRunway)).toLocaleString("en-US", optionsDate)}</td>                        
                            <td className="table__cell">{new Date(Date.parse(item.arrival.estimatedRunway)).toLocaleString("en-US", optionsTime)}</td>
                            <td className="table__cell">{item.departure.iataCode}</td>
                            <td className="table__cell">{item.flight.number}</td>
                            <td className="table__cell">{item.status}</td>
                        </tr>)

            } else if (item.type === 'departure') {
                    arr.push(
                        <tr className="table__line">
                            <td className="table__cell">{new Date(Date.parse(item.departure.scheduledTime)).toLocaleString("en-US", optionsDate)}</td>                        
                            <td className="table__cell">{new Date(Date.parse(item.departure.scheduledTime)).toLocaleString("en-US", optionsTime)}</td>
                            <td className="table__cell">{item.arrival.iataCode}</td>
                            <td className="table__cell">{item.flight.number}</td>
                            <td className="table__cell">{item.status}</td>
                        </tr>)
            }
        });
        
        return arr;
    }
}

export default Table;
