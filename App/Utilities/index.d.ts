/*
 * Created on Sun May 27 2018
 *
 * Copyright (c) 2018 Youke Xiang
 */

import * as React from 'react';
import Constraints from './Constraints';
export interface IMyStyleSheet {
    Dimensions?: Object;
    get?(theme: String): Object;
    getThemeColor(theme: String): Constraints.ITheme;
}
export declare const MyStyleSheet: IMyStyleSheet;

export interface II18n {
    t(prefix, scope, options);
}
export declare const I18n: II18n;

export class BaseComponent<P = {}, S = {}, SS = any> extends React.Component<P, S, SS> {
    screenWidth?: number;
    screenHeight?: number;
    screenSize?: number;
    onePixel?: number;
    getSize(): number;
    isLandscape(): boolean;
}

export interface IConstraints {
    Themes?: Constraints.ITheme;
}

export declare const Constraints: IConstraints;
