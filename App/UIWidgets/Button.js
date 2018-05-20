/*
 * Created on Sat May 05 2018
 *
 * Copyright (c) 2018 Youke Xiang
 */

import React, {Component} from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {MyStyleSheet} from '../Utilities';

export default class Button extends Component {
    render() {
        const {useDefaultStyle, disabled, color} = this.props;
        let _useDefaultStyle = useDefaultStyle || true;

        let containerStyle = [MyStyleSheet.get.btnActive, this.props.style];
        if (color) {
            containerStyle = [...containerStyle, {backgroundColor: color}];
        }
        if (disabled && _useDefaultStyle) {
            containerStyle = [MyStyleSheet.get.btnDisabled, this.props.style];
        }
        const childView = () => {
            const {children, text, image, tintColor} = this.props;
            const _tintColor = tintColor ? tintColor : '#fff';
            if (text || typeof children == 'string') {
                return (
                    <Text
                        style={[
                            MyStyleSheet.get.textMedium,
                            {
                                color: _tintColor
                            }
                        ]}>
                        {text || children}
                    </Text>
                );
            } else if (image) {
                return <Image source={image} tintColor={_tintColor} />;
            } else if (children) {
                return <View style={MyStyleSheet.get.row}>{children}</View>;
            }
        };
        return (
            <TouchableOpacity {...this.props} disabled={disabled}>
                <View style={containerStyle}>{childView()}</View>
            </TouchableOpacity>
        );
    }
}
