import React from 'react';
import { connect } from 'react-redux';
import Root from '../components/Root';

const RootContainer = props => <Root {...props} />;

const mapStateToProps = state => {
    return {
        state
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);