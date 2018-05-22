import React from 'react';
import {Text, Picker, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import SettingsActions from '../Reducers/Settings';
import I18n from 'react-native-i18n';
import {MyStyleSheet, BaseComponent} from '../Utilities';
import CacheStore from 'react-native-cache-store';
import {Button, FontAwesomeIcon} from '../UIWidgets';
import ColorConfig from '../Utilities/Constraints/ColorConfig';

class Settings extends BaseComponent {
    static navigationOptions = {
        tabBarIcon: ({tintColor, theme}) => (
            <FontAwesomeIcon style={[MyStyleSheet.get(theme).tabBarIconText, {color: tintColor}]}>
                {FontAwesomeIcon.Icons.cogs}
            </FontAwesomeIcon>
        )
    };
    render() {
        const {language, changeLanguage, changeTheme, theme} = this.props;
        const {setParams} = this.props.navigation;
        const styles = MyStyleSheet.get(theme);
        const languageOptions = Object.keys(I18n.translations).map((lang, i) => {
            return <Picker.Item key={i} label={I18n.translations[lang].id} value={lang} />;
        });
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.titleText}>{I18n.t('settings.language', {locale: language})}</Text>
                <Picker
                    style={styles.flexBox}
                    selectedValue={language}
                    onValueChange={this._languageChanged(changeLanguage, setParams)}>
                    {languageOptions}
                </Picker>
                <Button
                    text="ChangeTheme"
                    color={ColorConfig.get(theme).primary}
                    onPress={() => this._onColorChangePress(changeTheme)}
                />
            </SafeAreaView>
        );
    }

    _onColorChangePress = (changeTheme) => {
        changeTheme();
    };

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
        language: state.settings.language,
        theme: state.settings.theme
    };
};

const mapStateToDispatch = (dispatch) => ({
    changeLanguage: (newLang) => dispatch(SettingsActions.changeLanguage(newLang)),
    changeTheme: () => dispatch(SettingsActions.changeTheme())
});

export default connect(mapStateToProps, mapStateToDispatch)(Settings);
