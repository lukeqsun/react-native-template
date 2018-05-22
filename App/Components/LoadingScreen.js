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
                NavigationHelper.resetTo(this, 'TabNavigator');
            });
        }, 500);
    }

    render() {
        const {theme} = this.props;
        const styles = MyStyleSheet.get(theme);
        return (
            <SafeAreaView style={styles.flexBox}>
                <View style={[styles.container, styles.center]}>
                    <Text style={styles.textLarge}>Loading...</Text>
                    <FontAwesomeSpinner style={styles.textLarge}>
                        {FontAwesomeSpinner.Icons.spinner}
                    </FontAwesomeSpinner>
                </View>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.settings.language,
        theme: state.settings.theme
    };
};

const mapStateToDispatch = (dispatch) => ({
    changeLanguage: (newLang) => dispatch(SettingsActions.changeLanguage(newLang))
});

export default connect(mapStateToProps, mapStateToDispatch)(LoadingScreen);
