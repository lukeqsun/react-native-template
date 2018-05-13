/*
 * Created on Sun May 06 2018
 * This class is used as the root view, it listening the orientation changes.
 * 
 * Copyright (c) 2018 Youke Xiang
 */

import React, {Component} from 'react';
import {SafeAreaView, Dimensions} from 'react-native';

import Orientation from 'react-native-orientation';
import MyStyleSheet from './MyStyleSheet';

class SafeView extends Component {
    constructor(props) {
        super(props);
        this.state = {height: 0, width: 0};
    }

    componentDidMount() {
        const initial = Orientation.getInitialOrientation();
        this._orientationDidChange(initial);
        Orientation.addOrientationListener(this._orientationDidChange.bind(this));
    }

    _orientationDidChange(orientation) {
        const {height, width} = Dimensions.get('screen');

        this._setDimensionsToStyle(height, width);


        // return the orientation to parent view for later using
        if (this.props.onOrientationChange) {
            this.props.onOrientationChange(orientation, height, width);
        }
    }

    _setDimensionsToStyle(height, width) {
        MyStyleSheet.Dimensions = {height: height, width: width}; // set to style sheet
        this.setState({height: height, width: width});
    }

    componentWillUnmount() {
        Orientation.removeOrientationListener(this._orientationDidChange);
    }

    render() {
        return (
            <SafeAreaView {...this.props} style={{flex: 1, backgroundColor: '#fff'}}>
                {this.props.children}
            </SafeAreaView>
        );
    }
}

module.exports = {SafeView};
