import React from 'react';
import {Text, Picker, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import SettingsActions from '../Reducers/Settings';
import I18n from 'react-native-i18n';
import {MyStyleSheet, BaseComponent} from '../Utilities';
import CacheStore from 'react-native-cache-store';

class Settings extends BaseComponent {
    render() {
        const {language, changeLanguage} = this.props;
        const {setParams} = this.props.navigation;

        const languageOptions = Object.keys(I18n.translations).map((lang, i) => {
            return <Picker.Item key={i} label={I18n.translations[lang].id} value={lang} />;
        });

        return (
            <SafeAreaView style={MyStyleSheet.get.container}>
                <Text style={MyStyleSheet.get.titleText}>{I18n.t('settings.language', {locale: language})}</Text>
                <Picker
                    style={MyStyleSheet.get.flexBox}
                    selectedValue={language}
                    onValueChange={this._languageChanged(changeLanguage, setParams)}>
                    {languageOptions}
                </Picker>
            </SafeAreaView>
        );
    }

    _languageChanged = (changeLanguage, setParams) => (newLang) => {
        changeLanguage(newLang);
        CacheStore.set('SETTINGS_LANGUAGE', newLang);
        setParams({
            title: I18n.t('settings.title', {locale: newLang})
        });
    };
}

const mapStateToProps = (state) => {
    return {
        language: state.settings.language
    };
};

const mapStateToDispatch = (dispatch) => ({
    changeLanguage: (newLang) => dispatch(SettingsActions.changeLanguage(newLang))
});

export default connect(mapStateToProps, mapStateToDispatch)(Settings);
