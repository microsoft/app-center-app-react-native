import React, { PropTypes } from 'react';
import { Text, View } from 'react-native';

const MessagesView = (props) => {
    const { errors } = props;
    return (
        <View>
        {errors.map(error => (
            <Text key={error.time}> {error.body} </Text>
        ))}
        </View>
    );
}

MessagesView.propTypes = {
  errors: PropTypes.arrayOf(
      PropTypes.shape({
        body: PropTypes.string,
        time: PropTypes.date,
      })),
}

export default MessagesView