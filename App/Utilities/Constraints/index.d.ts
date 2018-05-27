export interface ColorConfig {
    /**
     *
     * @param theme Name of theme
     * @return {Object} The theme object
     */
    get?(theme: String): Object;
}

export declare const ColorConfig: ColorConfig;
