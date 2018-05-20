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
import {Toaster, Button} from '../../UIWidgets';
import {ColorConfig} from '../../Utilities/Constraints';

class ScreenA extends BaseComponent {
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
        this.Toaster.show('Toaster shown');
    }

    render() {
        const {language} = this.props;

        return (
            <SafeAreaView style={MyStyleSheet.get.flexBox}>
                <View style={MyStyleSheet.get.container}>
                    <View style={[MyStyleSheet.get.row]}>
                        <Text style={[MyStyleSheet.get.textSmall, MyStyleSheet.get.flexBox]}>
                            {I18n.t('settings.height', {locale: language})} {this.state.height}
                        </Text>
                        <Text style={[MyStyleSheet.get.textSmall, MyStyleSheet.get.flexBox]}>
                            {I18n.t('settings.width', {locale: language})} {this.state.width}
                        </Text>
                    </View>
                    <View>
                        <Button text="Toaster" color={ColorConfig.WARNING} onPress={() => this._onToasterPress()} />
                    </View>
                </View>
                <Toaster ref={(ref) => (this.Toaster = ref)} />
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.settings.language
    };
};

export default connect(mapStateToProps)(ScreenA);
