/*
 * Created on Sun May 13 2018
 *
 * Copyright (c) 2018 Youke Xiang
 */

import React from 'react';
import {Text, View, SafeAreaView, ScrollView} from 'react-native';
import {MyStyleSheet, BaseComponent, I18n} from '../../Utilities';
import {connect} from 'react-redux';
import {Button, FontAwesome, Badge} from '../../UIWidgets';
import DialogsActions from '../../Reducers/Dialogs';
import BadgeActions from '../../Reducers/Badge';
import SinglePicker from '../../UIWidgets/Dialogs/SinglePicker';

class ScreenA extends BaseComponent {
    static navigationOptions = {
        tabBarIcon: (props) => {
            let {tintColor} = props;
            return (
                <View>
                    <Badge size="small" badgeKey="ScreenABadge" />
                    <FontAwesome
                        size={MyStyleSheet.getAdjustHeight(28)}
                        type={'brands'}
                        color={tintColor}
                        name={'aws'}
                    />
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

    _onAlertDialogPress() {
        const {showAlert} = this.props;
        showAlert('This is alert message!', (cb) => {
            console.log(cb);
        });
    }

    _onSinglePickerPress() {
        this.SinglePicker.show();
    }

    render() {
        const {language, theme} = this.props;
        const styles = MyStyleSheet.get(theme);
        const themeColor = MyStyleSheet.getThemeColor(theme);
        return (
            <View style={styles.flexBox}>
                <SafeAreaView style={styles.container}>
                    <ScrollView>
                        <View style={[styles.row]}>
                            <Text style={[styles.textSmall, styles.flexBox, styles.textDark]}>
                                {I18n.t('settings', 'height', {locale: language})} {this.screenHeight}
                            </Text>
                            <Text style={[styles.textSmall, styles.textDark]}>
                                {I18n.t('settings', 'width', {locale: language})} {this.screenWidth}
                            </Text>
                        </View>
                        <View>
                            <Text style={[styles.textCenter, styles.titleText]}>Pop Up</Text>
                            <Button
                                text="ShowToast"
                                color={themeColor.warning.toDarkerColor(50)}
                                onPress={() => this._onToasterPress()}
                            />
                            <View style={{marginTop: 10}}>
                                <Button
                                    text="ShowAlertDialog"
                                    color={themeColor.warning.toHex()}
                                    onPress={() => this._onAlertDialogPress()}
                                />
                            </View>
                            <View style={{marginTop: 10}}>
                                <Button
                                    text="ShowSinglePicker"
                                    color={themeColor.danger.toDarkerColor(50)}
                                    onPress={() => this._onSinglePickerPress()}
                                />
                            </View>
                        </View>
                        <View>
                            <View style={{marginTop: 10}}>
                                <Text style={[styles.textCenter, styles.titleText]}>Badge</Text>
                                <Button
                                    text="AddToScreenA"
                                    color={themeColor.success.toHex()}
                                    onPress={() => this._onBtnAddBadgePress('ScreenABadge')}
                                />
                            </View>
                            <View style={{marginTop: 10}}>
                                <Button
                                    text="AddToSettings"
                                    color={themeColor.success.toRGBA(0.7)}
                                    onPress={() => this._onBtnAddBadgePress('SettingsBadge')}
                                />
                            </View>
                            <View style={{marginTop: 10}}>
                                <Button
                                    text="DeleteAllBadge"
                                    color={themeColor.danger.toHex()}
                                    onPress={() => this._onDeleteAllBadgePress()}
                                />
                            </View>
                        </View>
                    </ScrollView>
                    <SinglePicker ref={(ref) => (this.SinglePicker = ref)} cancelable />
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
    showToast: (message) => dispatch(DialogsActions.showToast(message)),
    showAlert: (message, onPress) => dispatch(DialogsActions.showAlert(message, onPress)),
    updateBadgeLabel: (label, key) => dispatch(BadgeActions.updateLabel(label, key)),
    deleteAllBadgeLabel: (label, key) => dispatch(BadgeActions.deleteAllLabel(label, key))
});

export default connect(
    mapStateToProps,
    mapStateToDispatch
)(ScreenA);
