/*
 * Created on Sun May 06 2018
 *
 * Copyright (c) 2018 Youke Xiang
 */

import {StyleSheet, Dimensions, Platform} from 'react-native';
import {ColorConfig} from './Constraints';

const {height, width} = Dimensions.get('screen');

let _height = height;
let _width = width;

/**
 * Put all styles here , and you will get dynamic dimension
 * @param {int} height Height of screen
 * @param {int} width Width of screen
 * @return {object} object for stylesheet
 */
const styles = (height = _height, width = _width) => {
    const fontHeight = height > width ? height : width; // font height alway keep same
    return {
        container: {
            flex: 1,
            paddingHorizontal: parseInt(width / 80),
            paddingVertical: parseInt(height / 100),
            backgroundColor: ColorConfig.WHITE
        },
        center: {
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center'
        },
        flexBox: {
            flex: 1
        },
        header: {
            backgroundColor: ColorConfig.PRIMARY
        },
        headerTitle: {
            fontSize: Platform.OS === 'ios' ? parseInt(fontHeight / 39) : parseInt(fontHeight / 45),
            fontWeight: Platform.OS === 'ios' ? '400' : '200',
            color: 'rgba(0, 0, 0, .9)',
            textAlign: Platform.OS === 'ios' ? 'center' : 'left',
            marginHorizontal: parseInt(fontHeight / 40)
        },
        loadingText: {
            fontSize: parseInt(fontHeight / 30),
            color: ColorConfig.BLACK
        },
        titleText: {
            fontSize: parseInt(fontHeight / 25),
            color: ColorConfig.BLACK,
            marginVertical: parseInt(height / 60),
            marginHorizontal: parseInt(width / 60)
        },
        drawerLabel: {
            fontSize: parseInt(fontHeight / 30),
            color: ColorConfig.BLACK,
            margin: parseInt(height / 60)
        },
        textLightColor: {
            color: ColorConfig.WHITE
        },
        textSmall: {
            fontSize: parseInt(fontHeight / 40)
        },
        textMedium: {
            fontSize: parseInt(fontHeight / 30)
        },
        textLarge: {
            fontSize: parseInt(fontHeight / 20)
        },
        textCenter: {
            textAlign: 'center',
            justifyContent: 'center',
            alignSelf: 'center'
        },
        spaceLeft: {
            marginLeft: parseInt(width / 50)
        },
        btnActive: {
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            paddingHorizontal: parseInt(width / 30),
            paddingVertical: parseInt(height / 100),
            backgroundColor: 'transparent',
            borderRadius: parseInt(height / 100)
        },
        btnDisabled: {
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            paddingHorizontal: parseInt(width / 30),
            paddingVertical: parseInt(height / 100),
            backgroundColor: '#aaa',
            borderRadius: parseInt(height / 100)
        },
        row: {
            flexDirection: 'row'
        }
    };
};

export default class MyStyleSheet {
    /**
     * @return {object} react native stylesheet
     */
    static get get() {
        return StyleSheet.create(styles());
    }
    /**
     * @param  {object} {height,width} A object contains height and width
     */
    static set Dimensions({height, width}) {
        _height = height;
        _width = width;
        styles(height, width);
    }
}
