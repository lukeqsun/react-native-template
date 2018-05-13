/*
 * Created on Sat May 05 2018
 *
 * Copyright (c) 2018 Youke Xiang
 */

import React, {Component} from 'react';
import {View, TouchableOpacity, Text, Dimensions} from 'react-native';
var {height} = Dimensions.get('window');

export default class Button extends Component {
    render() {
        var fontColor = this.props.color || '#fff';
        var containerStyle = [
            {
                justifyContent: 'center',
                alignItems: 'center',
                padding: height / 100,
                height: height / 15,
                backgroundColor: this.props.disabledColor || 'transparent',
                borderRadius: 5
            },
            this.props.style
        ];

        if (this.props.disabled && this.props.useDefaultStyle) {
            fontColor = '#fff';
            containerStyle = [
                this.props.style,
                {
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: height / 100,
                    height: height / 15,
                    backgroundColor: this.props.disabledColor
                }
            ];
        }
        return (
            <TouchableOpacity {...this.props} disabled={this.props.disabled}>
                <View style={containerStyle}>
                    <Text
                        style={{
                            fontSize: parseInt(height / 38),
                            color: fontColor
                        }}>
                        {this.props.children}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}
