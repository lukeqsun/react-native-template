import React from 'react';
import Toast from './Toast';
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
            </View>
        );
    }
}

export default RootView;
