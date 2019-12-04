import React, { useCallback, useMemo, useState, memo } from 'react';
import { bindActionCreators } from 'redux';
import Header from '../common/Header.jsx';
import DepartDate from './DepartDate.jsx';
import HighSpeed from './HighSpeed.jsx';
import Journey from './Journey.jsx';
import Submit from './Submit.jsx';

import { connect } from 'react-redux';
import './App.css';
import {
    exchangeFromTo, showCitySelector
} from './actions'

function App (props) {
    const [count, setCount] = useState(1)
    const { from, to, dispatch } = props
    const onBack = useCallback(() => {
        window.history.back();
    }, []);
    return (
        <div>
            <div className='header-wrapper'>
                <Header title='火车票' onBack={onBack} />
            </div>
            <div>
                <button onClick={() => { setCount(count + 1) }}>xx</button>
                {count}
            </div>
            <DepartDate />
            <HighSpeed />
            <Journey from={from} to={to} exchangeFromTo={() => { dispatch(exchangeFromTo()) }} showCitySelector={() => { dispatch(showCitySelector(m)) }} />
            <Submit />
        </div>
    )
}
export default connect(
    function mapStateToProps (state) { return state },
    function mapDispatchToProps (dispatch) { return { dispatch } }
)(App)