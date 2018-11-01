import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import App from './App';
import Header from './components/Header';
import Transaction from './components/Transaction';
import Summary from './components/Summary';
import Steps from './components/Steps';
import Inputs from './components/Inputs';
import Footer from './components/Footer';
import Modal from './components/Modal';

describe('<App />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders containing Header, Transaction and Summary components', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.find(Header).length).toBe(1);
        expect(wrapper.find(Transaction).length).toBe(1);
        expect(wrapper.find(Summary).length).toBe(1);

    });

    it('renders <Transaction /> component containing Steps, Inputs and Footer components', () => {
        const wrapper = shallow(<Transaction/>);
        expect(wrapper.find(Steps).length).toBe(1);
        expect(wrapper.find(Inputs).length).toBe(1);
        expect(wrapper.find(Footer).length).toBe(1);

    });

    it('renders <Inputs /> component containing a Modal', () => {
        const wrapper = shallow(<Inputs/>);
        expect(wrapper.find(Modal).length).toBe(1);
    });
});


