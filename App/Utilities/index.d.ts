/*
 * Created on Sun May 27 2018
 *
 * Copyright (c) 2018 Youke Xiang
 */

import * as React from 'react';
export interface MyStyleSheet {
    Dimensions?: Object;
    /**
     *
     * @param theme Name of theme
     * @return {Object} The theme object
     */
    get?(theme: String): Object;
}

export class BaseComponent<P = {}, S = {}, SS = any> extends React.Component<P, S, SS> {
    screenWidth?: number;
    screenHeight?: number;
    screenSize?: number;
    onePixel?: number;
}
export declare const MyStyleSheet: MyStyleSheet;

export namespace Constraints {
    export interface IColorConfig {
        /**
         *
         * @param theme Name of theme
         * @return {Object} The theme object
         */
        get?(theme: String): Object;
    }
    export declare const ColorConfig: IColorConfig;
}
