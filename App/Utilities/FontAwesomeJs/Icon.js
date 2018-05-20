
/*
 * 
 * Invoked from react-native-fontawesome on GitHub: https://github.com/entria/react-native-fontawesome
 * 
 */


import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

import Icons from './FontAwesomeIcons';

class Icon extends Component {
  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  static get Icons() {
      return Icons;
  }

  render() {
    const { style, color, children, ...props } = this.props;

    return (
      <Text
        {...props}
        style={[styles.icon, { color }, style]}
        ref={component => this._root = component}
      >
        {children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    fontFamily:       'Font Awesome 5 Free', // font TrueType name here.
    backgroundColor:  'transparent',
  },
});

export { Icons };
export default Icon;
