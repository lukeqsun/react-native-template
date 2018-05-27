/*
 * 
 * Invoked from react-native-fontawesome on GitHub: https://github.com/entria/react-native-fontawesome
 * 
 */

import React, {Component} from 'react';
import {Text} from 'react-native';

import Icons from './FontAwesomeIcons';

class Icon extends Component {
    setNativeProps(nativeProps) {
        this._root.setNativeProps(nativeProps);
    }

    static get Icons() {
        return Icons;
    }

    render() {
        const {style, color, children, fontFamily, backgroundColor, ...props} = this.props;

        return (
            <Text
                {...props}
                style={[{color, fontFamily, backgroundColor}, style]}
                ref={(component) => (this._root = component)}>
                {children}
            </Text>
        );
    }
}

Icon.defaultProps = {
    fontFamily: 'Font Awesome 5 Free', // font TrueType name here.
    backgroundColor: 'transparent'
};

export {Icons};
export default Icon;
