/*
 * Created on Sun Jun 17 2018
 *
 * Copyright (c) 2018 Youke Xiang
 */
import React from 'react';

import {View, Text, TouchableOpacity, TextInput, SafeAreaView} from 'react-native';

import BaseDialog from './BaseDialog';
import KeyboardSpacer from './KeyboardSpacer';
import {Button} from '../../UIWidgets';
import {connect} from 'react-redux';
import {I18n, Constraints} from '../../Utilities';

class InputDialog extends BaseDialog {
    constructor(props) {
        super(props);
    }

    _getContentPosition() {
        return {justifyContent: 'flex-end', alignItems: 'center'};
    }

    show(text) {
        super.show(null, {text: text});
        // this.textInput.focus();
    }

    dismiss(callback) {
        this.textInput.blur();
        super.dismiss(callback);
    }

    renderContent() {
        const {
            language,
            theme,
            title,
            titleSize,
            titleColor,
            cancelText,
            cancelSize,
            btnText,
            cancelColor,
            btnBgColor,
            placeholder,
            onSubmit
        } = this.props;

        const colorTheme = Constraints.Themes.get(theme);

        return (
            <SafeAreaView style={{width: this.screenWidth, backgroundColor: colorTheme.background.toDarkerColor(15)}}>
                <View
                    style={{
                        width: this.screenWidth,
                        height: this.getSize(50),
                        flexDirection: 'row',
                        paddingLeft: this.getSize(10),
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <TouchableOpacity
                        onPress={() => this.dismiss()}
                        style={{
                            position: 'absolute',
                            left: this.getSize(10),
                            height: this.getSize(40),
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: this.getSize(5)
                        }}>
                        <Text
                            style={{
                                fontSize: cancelSize,
                                color: cancelColor || colorTheme.secondary.toHex(),
                                marginLeft: this.getSize(5)
                            }}>
                            {cancelText}
                        </Text>
                    </TouchableOpacity>
                    <Text
                        style={{
                            position: 'absolute',
                            fontSize: titleSize,
                            color: titleColor || colorTheme.textDark.toHex(),
                            fontWeight: '600'
                        }}>
                        {I18n.t('dialogs', title, {locale: language})}
                    </Text>
                </View>
                <TextInput
                    ref={(ref) => (this.textInput = ref)}
                    style={{
                        marginHorizontal: this.getSize(15),
                        minHeight: parseInt(this.screenHeight / 5),
                        color: colorTheme.textDark.toRGBA(0.9),
                        fontSize: this.getSize(14),
                        borderWidth: 1,
                        borderColor: colorTheme.secondary.toRGBA(0.2),
                        backgroundColor: colorTheme.background.toHex(),
                        borderRadius: this.getSize(4),
                        paddingLeft: this.getSize(15),
                        paddingRight: this.getSize(15),
                        paddingTop: this.getSize(10)
                    }}
                    numberOfLines={4}
                    multiline={true}
                    value={this.state.text}
                    underlineColorAndroid={'transparent'}
                    placeholder={I18n.t('dialogs', placeholder, {locale: language})}
                    placeholderTextColor={colorTheme.textDark.toRGBA(0.2)}
                    onChangeText={(text) => {
                        this.inputText = text;
                    }}
                />
                <View
                    style={{
                        padding: this.getSize(15)
                    }}>
                    <Button
                        onPress={() =>
                            this.dismiss(() => {
                                onSubmit && onSubmit(this.inputText);
                            })
                        }
                        text={I18n.t('buttons', btnText, {locale: language})}
                        style={{
                            alignSelf: 'flex-end',
                            backgroundColor: btnBgColor || colorTheme.primary.toHex()
                        }}
                    />
                </View>
                <KeyboardSpacer />
            </SafeAreaView>
        );
    }
}

InputDialog.defaultProps = {
    removeSubviews: false,
    title: 'InputTitle',
    titleSize: 16,
    cancelText: 'Cancel',
    cancelSize: 14,
    btnText: 'Submit',
    btnTextSize: 12,
    placeholder: 'DefaultPlaceholder',
    onSubmit: null
};

const mapStateToProps = (state) => {
    return {
        language: state.settings.language,
        theme: state.settings.theme
    };
};

export default connect(
    mapStateToProps,
    null,
    null,
    {withRef: true}
)(InputDialog);
