import React, { Component } from 'react';
import Steps from './Steps';
import Inputs from './Inputs';
import Footer from './Footer'

class Transaction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amountSent: {
                isActive: false
            },
            amountReceived: {
                isActive: false
            }
        }
    }

    handleClick(e) {
        e.currentTarget.children.amountSent ?
            this.setState({
                amountSent:{ isActive: true },
                amountReceived: { isActive: false }}) :
            this.setState({
                amountSent:{ isActive: false },
                amountReceived:{ isActive: true }  });
    }

    render() {
        return (
            <div className="transaction-container">
                <Steps />
                <span className="title">Let's set up your transaction!</span><br />
                <span className="subtitle">Specify the amount to be sent or received</span><br />
                <Inputs handleClick={ (e) => this.handleClick(e) }
                    amountSent={this.state.amountSent.isActive}
                    amountReceived={this.state.amountReceived.isActive}/>
                <Footer />
            </div>
        )
    }
}

export default Transaction;