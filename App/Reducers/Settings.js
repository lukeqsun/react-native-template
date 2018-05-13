import {createReducer, createActions} from 'reduxsauce';
import I18n from 'react-native-i18n';
import CacheStore from 'react-native-cache-store';

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
    changeLanguage: ['language']
});

export const SettingsTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
    language: I18n.locale.substr(0, 2)
};


/* ------------- Reducers ------------- */

// request the data from an api
export const changeLanguage = (state, {language}) => {
    CacheStore.set('language', language);
    return {language};
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.CHANGE_LANGUAGE]: changeLanguage
});
