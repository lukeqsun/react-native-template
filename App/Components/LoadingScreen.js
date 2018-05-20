/*
 * Created on Sat May 05 2018
 *
 * Copyright (c) 2018 Youke Xiang
 */

import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import CacheStore from 'react-native-cache-store';

import {MyStyleSheet, BaseComponent} from '../Utilities';
import {FontAwesomeSpinner} from '../UIWidgets';
import SettingsActions from '../Reducers/Settings';
import NavigationHelper from '../Utilities/Helpers/NavigationHelper';

class LoadingScreen extends BaseComponent {
    static navigationOptions = {
        header: null
    };

    componentDidMount() {
        super.componentDidMount();
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
            <SafeAreaView style={MyStyleSheet.get.flexBox}>
                <View style={[MyStyleSheet.get.container, MyStyleSheet.get.center]}>
                    <Text style={MyStyleSheet.get.loadingText}>Loading...</Text>
                    <FontAwesomeSpinner style={MyStyleSheet.get.titleText}>
                        {FontAwesomeSpinner.Icons.spinner}
                    </FontAwesomeSpinner>
                </View>
            </SafeAreaView>
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
