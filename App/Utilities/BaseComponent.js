/**
 *
 */
import {Component} from 'react';
import {Dimensions, PixelRatio} from 'react-native';
import Orientation from 'react-native-orientation';
import MyStyleSheet from './MyStyleSheet';
const {height, width} = Dimensions.get('screen');

class BaseComponent extends Component {
    constructor(props) {
        super(props);
    }

    screenWidth = width;

    screenHeight = height;

    onePixel = (PixelRatio.get() == 3 ? 2 : 1) / PixelRatio.get();

    _orientationDidChange() {
        const {height, width} = Dimensions.get('screen');

        this._setDimensionsToStyle(height, width);

        this.screenWidth = width;
        this.screenHeight = height;
        this.onOrientationChange();
    }

    _setDimensionsToStyle(height, width) {
        MyStyleSheet.Dimensions = {height: height, width: width}; // set to style sheet
    }

    componentDidMount() {
        const initial = Orientation.getInitialOrientation();
        this._orientationDidChange(initial);
        Orientation.addOrientationListener(this._orientationDidChange.bind(this));
    }

    componentWillUnmount() {
        Orientation.removeOrientationListener(this._orientationDidChange);
    }
    /**
     * abstraction function for child using
     */
    onOrientationChange() {}
}

export default BaseComponent;
