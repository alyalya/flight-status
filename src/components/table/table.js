import React from 'react';
import Arrivals from '../arrivals/arrivals.js';
import Departures from '../departures/departures.js';
import Cancellations from '../cancelled/cancelled.js';


class Table extends React.Component {
    constructor(props) {
        super(props);

        this.onClickDep = this.onClickDep.bind(this);
        this.onClickArr = this.onClickArr.bind(this);
        this.onClickCanc = this.onClickCanc.bind(this);        

        this.state = {
            data: <Departures/>
        }
    }
    render() {
        return (
        <div>
        <button className="status" onClick={this.onClickDep}>Departure</button>
        <button className="status" onClick={this.onClickArr}>Arrival</button>
        <button className="status" onClick={this.onClickCanc}>Cancelled</button>        
        <input/>
        <table>
            <thead>
                <tr>
                    <th>Time</th>
                    <th>Airport</th> 
                    <th>Flight</th>
                    <th>Status</th>
                </tr>
            </thead>
            {this.state.data}
        </table>
        </div>
    )}

    onClickDep(event) {
        this.setState(
            {
                data: <Departures/>
            }
        )
    }

    onClickArr(event) {
        this.setState(
            {
                data: <Arrivals/>
            }
        )       
    }

    onClickCanc(event) {
        this.setState(
            {
                data: <Cancellations/>
            }
        )       
    }

}

export default Table;
