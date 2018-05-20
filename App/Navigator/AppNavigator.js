/*
 * Created on Sat May 05 2018
 *
 * Copyright (c) 2018 Youke Xiang
 */

import React from 'react';
import {connect} from 'react-redux';
import {createReduxBoundAddListener, createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers';
import {StackNavigator, DrawerNavigator} from 'react-navigation';
import {MyStyleSheet} from '../Utilities';
import DrawerComponent from './DrawerComponent';
import HeaderTitle from './HeaderTitle';
import {HeaderLeft} from './HeaderLeft';
import LoadingScreen from '../Components/LoadingScreen';
import ScreenA from '../Components/ScreenA';
import Settings from '../Components/Settings';

const Drawer = DrawerNavigator(
    {
        ScreenA: {
            screen: ScreenA
        },
        Settings: {
            screen: Settings
        }
    },
    {
        contentComponent: DrawerComponent
    }
);

export const AppNavigator = StackNavigator(
    {
        LoadingScreen: {
            screen: LoadingScreen
        },
        Drawer: {
            screen: Drawer
        }
    },
    {
        initialRouteName: 'LoadingScreen', //default screen
        headerMode: 'float',
        navigationOptions: ({navigation}) => ({
            headerLeft: HeaderLeft(navigation),
            headerStyle: MyStyleSheet.get.header,
            headerTitle: HeaderTitle,
            headerTintColor: 'white'
        })
    }
);
// Note: createReactNavigationReduxMiddleware must be run before createReduxBoundAddListener
export const middleware = createReactNavigationReduxMiddleware('root', (state) => state.nav);
const addListener = createReduxBoundAddListener('root');

class AppWithNavigationState extends React.Component {
    render() {
        const {dispatch, nav} = this.props;
        return (
            <AppNavigator
                navigation={{
                    dispatch,
                    state: nav,
                    addListener
                }}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);
