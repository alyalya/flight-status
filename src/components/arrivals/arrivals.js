import React from 'react';

class Arrivals extends React.Component {
    constructor(props) {
        super(props);

        this.generateLine = this.generateLine.bind(this);

        this.state = {
            data: [{ 
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
                "type": "arrival", 
                "status": "landed", 
                "departure": { 
                    "iataCode": "ULY", 
                    "icaoCode": "KJFK", 
                    "scheduledTime": "2017-13-11T01:08:00.000", 
                    "estimatedRunway": "2017-12-11T02:07:00.000", 
                    "actualRunway": "2017-12-11T02:07:00.000" }, 
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
                "status": "landed", 
                "departure": { 
                    "iataCode": "ULY", 
                    "icaoCode": "KJFK", 
                    "scheduledTime": "2017-13-11T01:08:00.000", 
                    "estimatedRunway": "2017-12-11T02:07:00.000", 
                    "actualRunway": "2017-12-11T02:07:00.000" }, 
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
                "status": "landed", 
                "departure": { 
                    "iataCode": "ULY", 
                    "icaoCode": "KJFK", 
                    "scheduledTime": "2017-13-11T01:08:00.000", 
                    "estimatedRunway": "2017-12-11T02:07:00.000", 
                    "actualRunway": "2017-12-11T02:07:00.000" }, 
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
              }
            ]
        }

    }
    render() {
        return (
            <tbody>
                {this.generateLine(3)}
          </tbody>
        )
    }

    generateLine(j) {
        var arr = [];
        for (var i = 0; i < j; i++) {
            arr.push(<tr>
                <td>{this.state.data[i].arrival.estimatedRunway}</td>
                <td>{this.state.data[i].departure.iataCode}</td>
                <td>{this.state.data[i].flight.number}</td>
                <td>{this.state.data[i].status}</td>
            </tr>)
            } 
        return arr;
        
    }
}

export default Arrivals;