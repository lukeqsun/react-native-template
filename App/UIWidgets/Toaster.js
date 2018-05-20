/*
 * Created on Sun May 20 2018
 *
 * Copyright (c) 2018 Youke Xiang
 */
import React from 'react';

import {View, Text, Animated} from 'react-native';
import {BaseComponent} from '../Utilities';

export default class Toaster extends BaseComponent {
    static defaultProps = {
        duration: 1500,
        textColor: '#ffffff',
        fontSize: 14,
        lineHeight: 20,
        paddingH: 10,
        paddingV: 5,
        borderRadius: 5,
        backgroundColor: 0x00000099
    };

    opacity = new Animated.Value(0);

    leftPath = new Animated.Value(0);

    constructor(props) {
        super(props);
        this.state = {
            toastVisible: false,
            toastText: ''
        };
    }

    show(message) {
        this.timeoutId && clearTimeout(this.timeoutId);
        this.opacity.setValue(0);
        this.setState({toastText: message, toastVisible: true});
        Animated.timing(this.opacity, {toValue: 1, duration: 200}).start();
        this.timeoutId = setTimeout(() => {
            Animated.timing(this.opacity, {toValue: 0, duration: 200}).start(() => {
                this.setState({toastVisible: false});
            });
        }, this.props.duration);
    }

    componentWillUnmount() {
        this.timeoutId && clearTimeout(this.timeoutId);
    }

    render() {
        if (this.state.toastVisible) {
            return (
                <Animated.View
                    onLayout={(e) => {
                        this.leftPath.setValue((this.screenWidth - e.nativeEvent.layout.width) / 2);
                    }}
                    style={{
                        opacity: this.opacity,
                        alignItems: 'center',
                        position: 'absolute',
                        top: parseInt(this.screenHeight * 0.75),
                        left: this.leftPath
                    }}>
                    <View
                        style={{
                            borderRadius: this.props.borderRadius,
                            backgroundColor: this.props.backgroundColor,
                            paddingLeft: this.props.paddingH,
                            paddingRight: this.props.paddingH,
                            paddingTop: this.props.paddingV,
                            paddingBottom: this.props.paddingV
                        }}>
                        <Text
                            style={{
                                color: this.props.textColor,
                                fontSize: this.props.fontSize,
                                lineHeight: this.props.lineHeight
                            }}>
                            {this.state.toastText}
                        </Text>
                    </View>
                </Animated.View>
            );
        } else {
            return null;
        }
    }
}
