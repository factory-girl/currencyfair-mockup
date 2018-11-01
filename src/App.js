import React, { Component } from 'react';
import Header from './components/Header';
import Summary from './components/Summary';
import Transaction from './components/Transaction';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.amountSent = "$2000.00";
        this.amountReceived = "£1717.94";
        this.rate = "0.86022";
        this.fee = "£2.50";
        this.date = "25th November";
        this.savings = "£66.19";
    }

    render() {
        return (
            <div className="main-container">
                <Header />
                <Transaction />
                <Summary amountSent={this.amountSent}
                    amountReceived={this.amountReceived}
                    rate={this.rate}
                    fee={this.fee}
                    date={this.date}
                    savings={this.savings}
                />
            </div>
            );
      }
}

export default App;
