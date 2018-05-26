/*
 * Created on Sat May 26 2018
 *
 * Copyright (c) 2018 Youke Xiang
 */

import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

const {Types, Creators} = createActions({
    updateLabel: ['label']
});

export const SettingsTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({label: 0});

export const updateLabel = (state, {label, key}) => {
    return {label, key};
};

export const reducer = createReducer(INITIAL_STATE, {
    [Types.UPDATE_LABEL]: updateLabel
});
