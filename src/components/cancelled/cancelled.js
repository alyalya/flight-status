import React from 'react';

class Cancellations extends React.Component {
    constructor(props) {
        super(props);

        this.generateLine = this.generateLine.bind(this);

        this.state = {
            data: [{ 
                "type": "departure", 
                "status": "cancelled", 
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
                    "actualRunway": "2017-12-11T02:07:00.000" }, 
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

    }
    render() {
        return (
            <tbody >
                {this.generateLine(2)}
            </tbody>
        )
    }

    generateLine(j) {
        var arr = [];
        for (var i = 0; i < j; i++) {
            arr.push(<tr status={this.state.data[i].status}>
                <td>{this.state.data[i].departure.scheduledTime}</td>
                <td>{this.state.data[i].arrival.iataCode}</td>
                <td>{this.state.data[i].flight.number}</td>
                <td>{this.state.data[i].status}</td>
            </tr>)
            } 
        return arr;
        
    }
}

export default Cancellations;
