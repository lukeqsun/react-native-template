interface IColors {
    black: string;
    white: string;
    primary: string;
    secondary: string;
    success: string;
    danger: string;
    warning: string;
    info: string;
    textLight: string;
    textDark: string;
    background: string;
    secondaryBackground: string;
}
export interface ITheme {
    /**
     *
     * @param theme Name of theme
     * @return {Object} The theme object
     */
    get?(theme: String): IColors;
}
export declare const Themes: ITheme;