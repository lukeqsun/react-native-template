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
import {Button, FontAwesomeIcon, Badge} from '../../UIWidgets';
import {ColorConfig} from '../../Utilities/Constraints';
import ToastActions from '../../Reducers/Toast';
import BadgeActions from '../../Reducers/Badge';

class ScreenA extends BaseComponent {
    static navigationOptions = {
        tabBarIcon: (props) => {
            let {tintColor, theme} = props;
            return (
                <View>
                    <Badge label={0} size="small" />
                    <FontAwesomeIcon
                        style={[
                            MyStyleSheet.get(theme).tabBarIconText,
                            {fontFamily: 'Font Awesome 5 Brands', color: tintColor}
                        ]}>
                        {'\uf170'}
                    </FontAwesomeIcon>
                </View>
            );
        }
    };
    constructor(props) {
        super(props);
        this.state = {
            badgeLabel: 0
        };
    }

    componentDidMount() {
        super.componentDidMount();
    }

    _onToasterPress() {
        const {showToast} = this.props;
        showToast('welcome');
    }

    _onBtnBadgePress() {
        this.state.badgeLabel = this.state.badgeLabel + 5;
        const {updateBadgeLabel} = this.props;
        updateBadgeLabel(this.state.badgeLabel);
        this.setState({badgeLabel: this.state.badgeLabel});
    }

    render() {
        const {language, theme} = this.props;
        const styles = MyStyleSheet.get(theme);

        return (
            <View style={styles.flexBox}>
                <SafeAreaView style={styles.container}>
                    <View style={[styles.row]}>
                        <Text style={[styles.textSmall, styles.flexBox, styles.textDark]}>
                            {I18n.t('settings.height', {locale: language})} {this.screenHeight}
                        </Text>
                        <Text style={[styles.textSmall, styles.textDark]}>
                            {I18n.t('settings.width', {locale: language})} {this.screenWidth}
                        </Text>
                    </View>
                    <View>
                        <Button
                            text="ShowToast"
                            color={ColorConfig.get(theme).warning}
                            onPress={() => this._onToasterPress()}
                        />
                    </View>
                    <View style={{marginTop: 10}}>
                        <Button
                            text="AddToBadge"
                            color={ColorConfig.get(theme).success}
                            onPress={() => this._onBtnBadgePress()}
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
    showToast: (message) => dispatch(ToastActions.showToast(message)),
    updateBadgeLabel: (label) => dispatch(BadgeActions.updateLabel(label)),
});

export default connect(mapStateToProps, mapStateToDispatch)(ScreenA);
