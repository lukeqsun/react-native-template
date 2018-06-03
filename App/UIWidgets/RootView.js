import React from 'react';
import Toast from './Toast';
import AlertDialog from './AlertDialog';
import {View} from 'react-native';

import {BaseComponent} from '../Utilities';

class RootView extends BaseComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View {...this.props}>
                {this.props.children}
                <Toast />
                <AlertDialog />
            </View>
        );
    }
}

export default RootView;
