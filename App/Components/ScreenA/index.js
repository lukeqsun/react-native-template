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
import {Button, FontAwesomeIcon} from '../../UIWidgets';
import {ColorConfig} from '../../Utilities/Constraints';
import ToastActions from '../../Reducers/Toast';

class ScreenA extends BaseComponent {
    static navigationOptions = {
        tabBarIcon: ({tintColor, theme}) => (
            <FontAwesomeIcon
                style={[MyStyleSheet.get(theme).tabBarIconText, {fontFamily: 'Font Awesome 5 Brands', color: tintColor}]}>
                {'\uf420'}
            </FontAwesomeIcon>
        )
    };
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
        const {language, theme} = this.props;
        const styles = MyStyleSheet.get(theme);
        return (
            <View style={styles.flexBox}>
                <SafeAreaView style={styles.container}>
                    <View style={[styles.row]}>
                        <Text style={[styles.textSmall, styles.flexBox]}>
                            {I18n.t('settings.height', {locale: language})} {this.state.height}
                        </Text>
                        <Text style={[styles.textSmall]}>
                            {I18n.t('settings.width', {locale: language})} {this.state.width}
                        </Text>
                    </View>
                    <View>
                        <Button
                            text="ShowToast"
                            color={ColorConfig.get(theme).warning}
                            onPress={() => this._onToasterPress()}
                        />
                    </View>
                </SafeAreaView>
            </View>
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
    showToast: (message) => dispatch(ToastActions.showToast(message))
});

export default connect(mapStateToProps, mapStateToDispatch)(ScreenA);
