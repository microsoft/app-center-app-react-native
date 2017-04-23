import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import User from './page';
import { requestUser } from './actions';

class UserContainer extends React.Component {
    render() {
        return (
            <User {...this.props} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state: state.user
    };
}

const mapDispatchToProps = (dispatch) => {
    const requestUserAction = bindActionCreators(requestUser, dispatch);
    return {
        'requestUserAction': requestUserAction
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
