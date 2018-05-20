/*
 * Created on Sat May 05 2018
 *
 * Copyright (c) 2018 Youke Xiang
 */

import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import CacheStore from 'react-native-cache-store';

import {SafeView, MyStyleSheet, FontAwesomeSpinner} from '../Utilities';
import SettingsActions from '../Reducers/Settings';
import NavigationHelper from '../Utilities/Helpers/NavigationHelper';

class LoadingScreen extends Component {
    static navigationOptions = {
        header: null
    };
    
    componentDidMount() {
        this.initApp();
    }

    initApp() {
        setTimeout(() => {
            const {changeLanguage} = this.props;
            CacheStore.get('SETTINGS_LANGUAGE').then((language) => {
                if (language) {
                    changeLanguage(language);
                }
                NavigationHelper.resetTo(this, 'Drawer');
            });
        }, 2000);
    }

    render() {
        return (
            <SafeView>
                <View style={MyStyleSheet.get.container}>
                    <Text style={MyStyleSheet.get.loadingText}>Loading...</Text>
                    <FontAwesomeSpinner style={MyStyleSheet.get.titleText}>{FontAwesomeSpinner.Icons.spinner}</FontAwesomeSpinner>
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

const mapStateToDispatch = (dispatch) => ({
    changeLanguage: (newLang) => dispatch(SettingsActions.changeLanguage(newLang))
});

export default connect(mapStateToProps, mapStateToDispatch)(LoadingScreen);
