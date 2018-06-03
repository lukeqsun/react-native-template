/*
 * Created on Sun Jun 03 2018
 *
 * Copyright (c) 2018 Youke Xiang
 */
import React from 'react';

import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

import BaseDialog from './BaseDialog';

class AlertDialog extends BaseDialog {
    constructor(props) {
        super(props);
    }

    UNSAFE_componentWillReceiveProps({dialogs}) {
        let {message, type, onPress} = dialogs;
        if (message && type == 'alert') {
            this.setState({message, onPress});
            this.show();
        }
    }

    _getContentPosition() {
        return {justifyContent: 'center', alignItems: 'center'};
    }

    renderContent() {
        return (
            <View
                style={{
                    height: this.getSize(160),
                    width: this.getSize(230),
                    backgroundColor: '#ffffff',
                    borderRadius: this.getSize(10)
                }}>
                <View
                    style={{
                        flex: 1,
                        paddingLeft: 15,
                        paddingRight: 15,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Text
                        style={{
                            fontSize: this.props.messageTextSize || this.getSize(15),
                            fontWeight: '100',
                            color: this.props.messageTextColor,
                            lineHeight: 20,
                            textAlign: 'center'
                        }}>
                        {this.state.message}
                    </Text>
                </View>
                <View
                    style={{
                        alignSelf: 'center',
                        width: this.getSize(220),
                        height: this.onePixel,
                        backgroundColor: '#e6e6e6'
                    }}
                />
                <View
                    style={{
                        height: this.getSize(35),
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row'
                    }}>
                    <TouchableOpacity
                        onPress={() => {
                            this.dismiss(() => {
                                if (this.state.onPress) {
                                    this.state.onPress(true);
                                }
                            });
                        }}
                        style={{
                            flex: 1,
                            height: this.getSize(35),
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <Text
                            style={{
                                color: this.props.positiveColor,
                                fontSize: this.props.positiveSize || this.getSize(15)
                            }}>
                            {this.props.positiveText}
                        </Text>
                    </TouchableOpacity>
                    <View
                        style={{
                            height: this.getSize(28),
                            width: this.onePixel,
                            backgroundColor: '#e6e6e6'
                        }}
                    />
                    <TouchableOpacity
                        onPress={() => {
                            this.dismiss(() => {
                                if (this.state.onPress) {
                                    this.state.onPress(false);
                                }
                            });
                        }}
                        style={{
                            flex: 1,
                            height: this.getSize(45),
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <Text
                            style={{
                                color: this.props.negativeColor,
                                fontSize: this.props.negativeSize || this.getSize(15)
                            }}>
                            {this.props.negativeText}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

AlertDialog.defaultProps = {
    message: 'Alert Message',
    messageTextColor: '#444444',
    negativeText: 'Cancel',
    negativeColor: '#666666',
    positiveText: 'OK',
    positiveColor: '#1097D5',
    onPress: null
};

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogs,
        language: state.settings.language
    };
};

export default connect(mapStateToProps)(AlertDialog);
