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
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: ColorConfig.WHITE
        },
        flex: {
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
            marginHorizontal: parseInt(fontHeight / 40),
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
