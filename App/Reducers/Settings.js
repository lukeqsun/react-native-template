/*
 * Created on Sun May 16 2018
 *
 * Copyright (c) 2018 Youke Xiang
 */

import {createReducer, createActions} from 'reduxsauce';
import merge from 'lodash/merge';
import I18n from 'react-native-i18n';
import ColorConfig from '../Utilities/Constraints/ColorConfig';

const {Types, Creators} = createActions({
    changeLanguage: ['language'],
    changeTheme: ['theme']
});

export const SettingsTypes = Types;
export default Creators;

export const INITIAL_STATE = {
    language: I18n.locale.substr(0, 2),
    theme: 'default'
};

export const changeLanguage = (state, {language}) => {
    return merge(state, {language});
};

export const changeTheme = (state, {theme}) => {
    theme = 'black';
    ColorConfig.setColorTheme = 'black';
    return {theme};
};

export const reducer = createReducer(INITIAL_STATE, {
    [Types.CHANGE_LANGUAGE]: changeLanguage,
    [Types.CHANGE_THEME]: changeTheme
});
