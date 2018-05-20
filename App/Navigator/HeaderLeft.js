/*
 * Created on Sun May 20 2018
 *
 * Copyright (c) 2018 Youke Xiang
 */

import React from 'react';
import {Button, FontAwesomeIcon} from '../UIWidgets';
import {MyStyleSheet} from '../Utilities';
import {DrawerActions} from 'react-navigation';
import _ from 'lodash';

export const HeaderLeft = (navigation) => {
    const _onPress = _.debounce(() => navigation.dispatch(DrawerActions.toggleDrawer()), 500, {
        leading: true,
        trailing: false
    }); // debounce unable solve maximum update depth exceeded, waiting for react-navigation fix this
    return (
        <Button onPress={() => _onPress()}>
            <FontAwesomeIcon
                style={[MyStyleSheet.get.textLightColor, MyStyleSheet.get.textSmall, MyStyleSheet.get.textCenter]}>
                {FontAwesomeIcon.Icons.ellipsisV}
            </FontAwesomeIcon>
            <FontAwesomeIcon
                style={[
                    MyStyleSheet.get.textLightColor,
                    MyStyleSheet.get.textMedium,
                    MyStyleSheet.get.spaceLeft,
                    MyStyleSheet.get.textCenter
                ]}>
                {'\uf406'}
            </FontAwesomeIcon>
        </Button>
    );
};
