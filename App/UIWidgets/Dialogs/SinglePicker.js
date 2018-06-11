import React from 'react';

import {View} from 'react-native';

import BaseDialog from './BaseDialog';

import PickerView from './PickerView';

export default class SinglePicker extends BaseDialog {
    static defaultProps = {
        list: ['item0', 'item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'item9']
    };

    constructor(props) {
        super(props);
    }

    _getContentPosition() {
        return {justifyContent: 'flex-end', alignItems: 'center'};
    }

    renderContent() {
        return (
            <View
                style={{
                    width: this.screenWidth,
                    backgroundColor:'#f00'
                }}>
                <PickerView
                    list={this.props.list}
                    onPickerSelected={(toValue) => {
                        console.warn(toValue);
                    }}
                    selectedIndex={0}
                    fontSize={this.getSize(14)}
                    itemWidth={this.screenWidth}
                    itemHeight={this.getSize(40)}
                />
            </View>
        );
    }
}
