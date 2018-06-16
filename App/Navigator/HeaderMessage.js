/*
 * Created on Sat Jun 16 2018
 *
 * Copyright (c) 2018 Youke Xiang
 */
import React from 'react';
import {Constraints, BaseComponent} from '../Utilities';
import FontAwesome from '../UIWidgets/FontAwesomeJs';
import {Animated, StyleSheet} from 'react-native';

class HeaderMessage extends BaseComponent {
    _path = new Animated.Value(0);
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.show();
        setTimeout(() => {
            this.dismiss();
        }, 1000);
    }

    show(callback) {
        Animated.timing(this._path, {toValue: 1, duration: 350}).start(() => {
            callback && callback();
        });
    }

    dismiss(callback) {
        Animated.timing(this._path, {toValue: 0, duration: 350}).start(() => {
            this.setState({_isShow: false}, () => {
                callback && callback();
            });
        });
    }

    render() {
        const _backgroundColor = Constraints.Themes.get()['danger'].toHex();
        const textStyle = {
            color: Constraints.Themes.get().textLight.toHex(),
            fontSize: parseInt(this.screenHeight / 40),
            marginHorizontal: parseInt(this.screenWidth / 100),
            fontFamily: 'Font Awesome 5 Free'
        };
        return (
            <Animated.View style={StyleSheet.absoluteFill}>
                <Animated.View
                    style={{
                        flex: 1,
                        backgroundColor: _backgroundColor,
                        flexDirection: 'row',
                        alignItems: 'flex-end',
                        paddingBottom: parseInt(this.screenHeight / 100),
                        paddingHorizontal: parseInt(this.screenWidth / 80),
                        transform: [
                            {
                                translateY: this._path.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [-100, 0]
                                })
                            }
                        ]
                    }}>
                    <FontAwesome
                        name="check-circle"
                        color={Constraints.Themes.get().textLight.toHex()}
                        type="regular"
                        size={parseInt(this.screenHeight / 40)}
                    />
                    <Animated.Text style={textStyle}>message</Animated.Text>
                </Animated.View>
            </Animated.View>
        );
    }
}

export default HeaderMessage;
