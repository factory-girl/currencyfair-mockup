import React, { Component } from 'react';

class Summary extends Component {

    render() {
        return (
            <div className="summary-container">
                <div className="summary">
                    <div className="summary-item-container">
                        <div className="summary-item-container-top">
                            <div className="summary-item-header">
                                Sending Details
                            </div>
                        </div>
                        <div className="summary-item-content">
                            <div className="summary-item-keys">
                                <ul>
                                    <li>You send</li>
                                </ul>
                            </div>
                            <div className="summary-item-values">
                                <ul>
                                    <li className="summary-amount-sent">{this.props.amountSent}</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className="summary-item-container">
                        <div className="summary-item-container-top">
                            <div className="summary-item-header">
                                Receiving Details
                            </div>
                        </div>
                        <div className="summary-item-content">
                            <div className="summary-item-keys">
                                <ul>
                                    <li>Rate</li>
                                    <li>Fee</li>
                                    <li>Delivery date</li>
                                    <li>Recipient gets</li>
                                </ul>
                            </div>
                            <div className="summary-item-values">
                                <ul>
                                    <li>{this.props.rate}</li>
                                    <li>{this.props.fee}</li>
                                    <li>{this.props.date}</li>
                                    <li className="summary-amount-received">{this.props.amountReceived}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="summary-footer">
                        You saved {this.props.savings} compared to your bank!
                    </div>
                </div>
            </div>
        )
    }
}

export default Summary;