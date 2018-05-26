/*
 * Created on Sun May 13 2018
 *
 * Copyright (c) 2018 Youke Xiang
 */

import React from 'react';
import {Text, View, SafeAreaView, ScrollView} from 'react-native';
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
                    <Badge size="small" badgeKey="ScreenABadge" />
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

    _onBtnAddBadgePress(key) {
        this.state.badgeLabel = this.state.badgeLabel + 5;
        const {updateBadgeLabel} = this.props;
        updateBadgeLabel(this.state.badgeLabel, key);
    }

    _onDeleteAllBadgePress() {
        const {deleteAllBadgeLabel} = this.props;
        this.setState({badgeLabel: 0});
        deleteAllBadgeLabel();
    }

    render() {
        const {language, theme} = this.props;
        const styles = MyStyleSheet.get(theme);

        return (
            <View style={styles.flexBox}>
                <SafeAreaView style={styles.container}>
                    <ScrollView>
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
                        <View>
                            <Text style={[styles.textCenter, styles.titleText]}>Badge</Text>
                            <View style={{marginTop: 10}}>
                                <Button
                                    text="AddToScreenA"
                                    color={ColorConfig.get(theme).success}
                                    onPress={() => this._onBtnAddBadgePress('ScreenABadge')}
                                />
                            </View>
                            <View style={{marginTop: 10}}>
                                <Button
                                    text="AddToSettings"
                                    color={ColorConfig.get(theme).success}
                                    onPress={() => this._onBtnAddBadgePress('SettingsBadge')}
                                />
                            </View>
                            <View style={{marginTop: 10}}>
                                <Button
                                    text="DeleteAllBadge"
                                    color={ColorConfig.get(theme).danger}
                                    onPress={() => this._onDeleteAllBadgePress()}
                                />
                            </View>
                        </View>
                    </ScrollView>
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
    updateBadgeLabel: (label, key) => dispatch(BadgeActions.updateLabel(label, key)),
    deleteAllBadgeLabel: (label, key) => dispatch(BadgeActions.deleteAllLabel(label, key))
});

export default connect(mapStateToProps, mapStateToDispatch)(ScreenA);
