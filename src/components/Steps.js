import React, { Component } from 'react';

class Steps extends Component {

    render() {
        return (
            <div className="steps-container">
                <div className="step">
                    <div className="step-content-active">
                        <span>Step1</span><br />
                        <span className="step-span">Transaction info</span>
                    </div>
                    <div className="step-content">
                        <span>Step2</span><br />
                        <span className="step-span">Recipient info</span>
                    </div>
                    <div className="step-content">
                        <span>Step3</span><br />
                        <span className="step-span">Make a payment</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Steps;