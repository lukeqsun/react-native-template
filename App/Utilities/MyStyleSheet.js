/*
 * Created on Sun May 06 2018
 *
 * Copyright (c) 2018 Youke Xiang
 */

import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('screen');

let _height = height;
let _width = width;

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

/**
 * Put all styles here , and you will get dynamic dimension
 * @param {int} height Height of screen
 * @param {int} width Width of screen
 * @return {object} object for stylesheet
 */
const styles = (height = _height, width = _width) => {
    const fontHeight = (height > width) ? height : width; // font height alway keep same
    return {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        font: {
            fontSize: parseInt(fontHeight / 10)
        },
        loadingText: {
            fontSize: parseInt(fontHeight / 30)
        }
    };
};
