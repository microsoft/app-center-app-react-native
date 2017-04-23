import React from 'react';
import { Text, View } from 'react-native';
MurmurHash3 = require('imurmurhash');

export const IdenticonColors = {
  colors: ['#1FAECE', '#44B8A8', '#91CA47', '#9378CD', '#F56D4F', '#F1C40F'],
  light1Colors: ['#4FCAE6', '#7AD5C9', '#B3E770', '#B5A1E0', '#F69781', '#F9D33C'],
  dark1Colors: ['#3192B3', '#38A495', '#6FA22E', '#7E68C2', '#E2553D', '#F0B240'],
  light2Colors: ['#91E2F4', '#A3EBE1', '#CFEFA7', '#CEC0EC', '#F8C6BB', '#F7E28B'],
  dark2Colors: ['#2C7797', '#278E80', '#5A8622', '#614CA0', '#BC3C26', '#E7963B']
};

export const getColor = (value, colors = IdenticonColors.colors) => {
  const hash = MurmurHash3(value).result();
  const index = hash % colors.length;
  return colors[index];
};

export default class Identicon extends React.Component {
  getStyle() {
    const { value } = this.props;
    const size = parseInt(this.props.size);
    return {
      backgroundColor: getColor(value, IdenticonColors.light1Colors),
      borderRadius: 10,
      width: size,
      height: size,
      alignItems:'center',
      justifyContent:'center'
    };
  }

  getTextStyle() {
    const { value, size } = this.props;
    return {
      color: getColor(value, IdenticonColors.dark1Colors),
      fontSize: Math.floor(size / 2)
    };
  }

  /*
  iconStyle() {
    const { value, size } = this.props;
    return {
      fill: getColor(value, IdenticonColors.dark1Colors),
      width: Math.floor(size / 1.2),
      height: Math.floor(size / 1.2)
    };
  }
  */

  render() {
    const { value } = this.props;
    return (
      <View style={this.getStyle()}>
        <Text style={this.getTextStyle()}>{value}</Text>
      </View>
    );
  }
}
