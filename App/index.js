import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import './I18n/I18n';
import AppWithNavigationState, {middleware} from './Navigators/AppNavigator';
import {appReducer} from './Reducers';

const store = createStore(appReducer, applyMiddleware(middleware));

class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        );
    }
}

module.exports = Root;
