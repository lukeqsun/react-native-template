/*
 * Created on Sun May 13 2018
 *
 * Copyright (c) 2018 Youke Xiang
 */
let black = '#2b2b2b';
let white = '#fff';
let primary = '#007bff';
let secondary = '#6c757d';
let success = '#28a745';
let danger = '#dc3545';
let warning = '#ffc107';
let info = '#17a2b8';
let textLight = white;
let textDark = black;
let background = white;

class ColorConfig {
    static get BLACK() {
        return black;
    }

    static get WHITE() {
        return white;
    }

    static get PRIMARY() {
        return primary;
    }

    static get SECONDARY() {
        return secondary;
    }

    static get SUCCESS() {
        return success;
    }

    static get DANGER() {
        return danger;
    }

    static get WARNING() {
        return warning;
    }

    static get INFO() {
        return info;
    }

    static get TEXT_LIGHT(){
        return textLight;
    }

    static get TEXT_DARK(){
        return textDark;
    }

    static get BACKGROUND(){
        return background;
    }
}

export default ColorConfig;
