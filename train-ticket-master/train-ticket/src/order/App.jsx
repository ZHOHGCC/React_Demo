import React, { useCallback, useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './App.css';

function App (props) {

}
export default connect(
    function mapStateToProps (state) { },
    function mapDispatchToProps (dispatch) { }
)(App)