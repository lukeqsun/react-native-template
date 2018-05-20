import React from 'react';
import Toast from './Toast';
import {SafeAreaView} from 'react-native';

import {BaseComponent} from '../Utilities';

class RootView extends BaseComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SafeAreaView {...this.props}>
                {this.props.children}
                <Toast />
            </SafeAreaView>
        );
    }
}

export default RootView;
