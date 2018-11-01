import React, { Component } from 'react';

class Modal extends Component {


    render() {
        return (
            <div className="modal-content">
                <div className="modal-header-container">
                    <div className="modal-header">
                        <span className="modal-heading">Identity verification required</span><br />
                        <span className="modal-subheading">For your security, we occasionally
                            require you to verify your identity by entering a code sent to your
                            mobile device.</span>
                    </div>
                </div>
                <div className="modal-body-container">
                    <div className="modal-body-container-top">
                        <span className="modal-body-message">Enter the code sent via SMS to
                    +353 872251177</span>
                    </div>
                    <div className="modal-body-container-bottom">
                        <div className="number-box"></div>
                        <div className="number-box"></div>
                        <div className="number-box"></div>
                        <div className="number-box"></div>
                        <div className="number-box"></div>
                        <div className="number-box"></div>
                    </div>
                </div>
                <div className="modal-footer-container">
                    <button className="modal-button-verify">
                        Verify Identity
                    </button>
                    <button className="modal-button-back">
                        Back
                    </button>
                </div>
            </div>
        )
    }
}

export default Modal;