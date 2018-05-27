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

export class BaseComponent<P = {}, S = {}, SS = any> extends React.Component<P, S, SS> {}
export declare const BaseComponent: BaseComponent;
export declare const MyStyleSheet: MyStyleSheet;
