/*
 * Created on Sat May 26 2018
 *
 * Copyright (c) 2018 Youke Xiang
 */

import React from 'react';
import {View, Animated} from 'react-native';
import {BaseComponent} from '../Utilities';
import {connect} from 'react-redux';

class Badge extends BaseComponent {
    constructor(props) {
        super(props);
        this.springValue = new Animated.Value(1);
    }

    UNSAFE_componentWillReceiveProps() {
        this.springValue = new Animated.Value(0.9);
        Animated.spring(this.springValue, {
            toValue: 1,
            friction: 5
        }).start();
    }

    render() {
        let {backgroundColor, fontSize, label, textColor, size} = this.props;
        let _height = parseInt(this.screenSize / 40);
        switch (size) {
            case 'small':
                _height = parseInt(this.screenSize / 50);
                break;
            case 'large':
                _height = parseInt(this.screenSize / 30);
                break;
        }
        if (label === 0) {
            _height = parseInt(this.screenSize / 120);
            label = '';
        }
        let _fontSize = parseInt(_height / 1.5);
        let _borderRadius = parseInt(_height / 2);

        return (
            <View
                {...this.props}
                style={{
                    position: 'absolute',
                    right: -_borderRadius,
                    top: -_borderRadius,
                    zIndex: 999
                }}>
                <Animated.View
                    style={{
                        borderRadius: _borderRadius,
                        height: _height,
                        minWidth: _height,
                        backgroundColor: backgroundColor || '#f00',
                        justifyContent: 'center',
                        transform: [{scale: this.springValue}],
                        paddingHorizontal: _height * 0.2
                    }}>
                    <Animated.Text
                        style={{
                            color: textColor || '#fff',
                            alignSelf: 'center',
                            fontSize: fontSize || _fontSize
                        }}>
                        {label}
                    </Animated.Text>
                </Animated.View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.settings.language,
        theme: state.settings.theme,
        label: state.badge.label
    };
};

export default connect(mapStateToProps)(Badge);
