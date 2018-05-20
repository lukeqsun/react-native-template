/*
 * Created on Sun May 20 2018
 *
 * Copyright (c) 2018 Youke Xiang
 */

import {createReducer, createActions} from 'reduxsauce';
import I18n from 'react-native-i18n';

const {Types, Creators} = createActions({
    showToast: ['message', 'duration'],
});

export const SettingsTypes = Types;
export default Creators;

export const INITIAL_STATE = {message: '', duration: 3000};

export const showToast = (state, {message, duration = 3000}) => {
    return {message, duration};
};

export const reducer = createReducer(INITIAL_STATE, {
    [Types.SHOW_TOAST]: showToast,
});
