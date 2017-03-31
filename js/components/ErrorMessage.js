import React from 'react';

function ErrorMessage (props) {
    return (
        <Text> {props.error} </Text>
    )
}

ErrorMessage.propTypes = {
    error: React.PropTypes.string    
}

export default ErrorMessage