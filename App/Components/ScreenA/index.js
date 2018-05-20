/*
 * Created on Sun May 13 2018
 *
 * Copyright (c) 2018 Youke Xiang
 */

import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {SafeView, MyStyleSheet} from '../../Utilities';
import {connect} from 'react-redux';
import I18n from 'react-native-i18n';

class ScreenA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 0,
            width: 0
        };
    }

    onOrientationChange(orientation, height, width) {
        this.setState({height, width});
    }

    render() {
        const {language} = this.props;

        return (
            <SafeView onOrientationChange={this.onOrientationChange.bind(this)}>
                <View style={MyStyleSheet.get.container}>
                    <Text style={MyStyleSheet.get.loadingText}>
                        {I18n.t('settings.height', {locale: language})} {this.state.height}
                    </Text>
                    <Text style={MyStyleSheet.get.font}>
                        {I18n.t('settings.width', {locale: language})} {this.state.width}
                    </Text>
                </View>
            </SafeView>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.settings.language
    };
};

export default connect(mapStateToProps)(ScreenA);