/*
 * Created on Sun May 20 2018
 *
 * Copyright (c) 2018 Youke Xiang
 */

import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

const {Types, Creators} = createActions({
    showToast: ['message', 'duration']
});

export const SettingsTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({message: '', duration: 3000});

export const showToast = (state, {message, duration = 3000}) => {
    return {message, duration}; // unable using immutable merge here. it should always receive new props
};

export const reducer = createReducer(INITIAL_STATE, {
    [Types.SHOW_TOAST]: showToast
});
