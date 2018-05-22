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
let _screenSize;
/**
 * Put all styles here , and you will get dynamic dimension
 * @param {int} height Height of screen
 * @param {int} width Width of screen
 * @return {object} object for stylesheet
 */
const styles = (theme = 'default', height = _height, width = _width) => {
    return {
        container: {
            flex: 1,
            backgroundColor: ColorConfig.get(theme).background
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
            backgroundColor: ColorConfig.get(theme).primary
        },
        headerTitle: {
            fontSize: Platform.OS === 'ios' ? parseInt(_screenSize / 39) : parseInt(_screenSize / 45),
            fontWeight: Platform.OS === 'ios' ? '400' : '200',
            color: 'rgba(0, 0, 0, .9)',
            textAlign: Platform.OS === 'ios' ? 'center' : 'left',
            marginHorizontal: parseInt(_screenSize / 40)
        },
        loadingText: {
            fontSize: parseInt(_screenSize / 30),
            color: ColorConfig.TEXT_DARK
        },
        titleText: {
            fontSize: parseInt(_screenSize / 38),
            color: ColorConfig.TEXT_DARK,
            marginVertical: parseInt(height / 60),
            marginHorizontal: parseInt(width / 60)
        },
        drawerLabel: {
            fontSize: parseInt(_screenSize / 40),
            color: ColorConfig.TEXT_DARK,
            margin: parseInt(height / 60)
        },
        textLightColor: {
            color: ColorConfig.TEXT_LIGHT
        },
        textSmall: {
            fontSize: parseInt(_screenSize / 40)
        },
        textMedium: {
            fontSize: parseInt(_screenSize / 35)
        },
        textLarge: {
            fontSize: parseInt(_screenSize / 30)
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
        },
        tabLabel:{
            textAlign: 'center',
            backgroundColor: 'transparent',
            fontSize: parseInt(_screenSize / 80),
            marginBottom: 1.5
        }
    };
};

class MyStyleSheet {
    /**
     * @return {object} react native stylesheet
     */
    static get(theme) {
        return StyleSheet.create(styles(theme));
    }
    /**
     * @param  {object} {height,width} A object contains height and width
     */
    static set Dimensions({height, width, screenSize}) {
        _height = height;
        _width = width;
        _screenSize = screenSize;
        styles(undefined, height, width);
    }
}

export default MyStyleSheet;
