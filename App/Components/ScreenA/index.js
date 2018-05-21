/*
 * Created on Sun May 13 2018
 *
 * Copyright (c) 2018 Youke Xiang
 */

import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import {MyStyleSheet, BaseComponent} from '../../Utilities';
import {connect} from 'react-redux';
import I18n from 'react-native-i18n';
import {Button} from '../../UIWidgets';
import {ColorConfig} from '../../Utilities/Constraints';
import ToastActions from '../../Reducers/Toast';

class ScreenA extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            height: 0,
            width: 0
        };
    }

    componentDidMount() {
        super.componentDidMount();
    }

    onOrientationChange() {
        this.setState({height: this.screenHeight, width: this.screenWidth});
    }

    _onToasterPress() {
        const {showToast} = this.props;
        showToast('welcome');
    }

    render() {
        const {language} = this.props;

        return (
            <View style={MyStyleSheet.get.flexBox}>
                <SafeAreaView style={MyStyleSheet.get.container}>
                    <View style={[MyStyleSheet.get.row]}>
                        <Text style={[MyStyleSheet.get.textSmall, MyStyleSheet.get.flexBox]}>
                            {I18n.t('settings.height', {locale: language})} {this.state.height}
                        </Text>
                        <Text style={[MyStyleSheet.get.textSmall]}>
                            {I18n.t('settings.width', {locale: language})} {this.state.width}
                        </Text>
                    </View>
                    <View>
                        <Button text="Toaster" color={ColorConfig.WARNING} onPress={() => this._onToasterPress()} />
                    </View>
                </SafeAreaView>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.settings.language
    };
};

const mapStateToDispatch = (dispatch) => ({
    showToast: (message) => dispatch(ToastActions.showToast(message))
});

export default connect(mapStateToProps, mapStateToDispatch)(ScreenA);
