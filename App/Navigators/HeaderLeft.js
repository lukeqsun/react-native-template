/*
 * Created on Sun May 20 2018
 *
 * Copyright (c) 2018 Youke Xiang
 */

import React from 'react';
import Button from '../Widgets/Button';
import {FontAwesomeIcon, MyStyleSheet} from '../Utilities';
import {DrawerActions} from 'react-navigation';

export const HeaderLeft = (navigation) => {
    return (
        <Button onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
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
                {FontAwesomeIcon.Icons.addressCard}
            </FontAwesomeIcon>
        </Button>
    );
};
