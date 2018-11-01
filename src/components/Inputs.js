import React, { Component } from "react";
import Modal from './Modal';

class Inputs extends Component {
    constructor(props) {
        super(props);
        this.state = { showModal: false };
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        this.setState({ showModal: true })
    }

    render(){

        return(
            <form onSubmit = {(e) => this.onSubmit(e)}>
                <div className="inputs">
                    <div className={`input-container${ this.props.amountSent
                        ? '-active-input' : '' }` }
                         onClick={ (e) => this.props.handleClick(e) }>
                        <span className="inputs-title">YOU SEND</span><br />
                        <input type="text" name="amountSent"/>< br/>
                        <div className="currency-dropdown">
                            <span className="currency">USD</span>
                        </div>
                    </div>
                    <div className={`input-container${ this.props.amountReceived
                        ? '-active-input' : '' }` }
                         onClick={ (e) => this.props.handleClick(e) }>
                        <span className="inputs-title">RECEIVER GETS</span><br />
                        <input type="text" name="amountReceived"/>< br/>
                        <div className="currency-dropdown">
                            <span className="currency">GBP</span>
                        </div>
                        <div className="modal" style={{visibility: this.state.showModal ? 'visible' : 'hidden' }}>
                            <Modal/>
                        </div>
                    </div>
                    <button className="next-button">Next</button>
                </div>
            </form>
        )
    }
}

export default Inputs;