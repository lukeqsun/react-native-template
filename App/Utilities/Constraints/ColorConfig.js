/*
 * Created on Sun May 13 2018
 *
 * Copyright (c) 2018 Youke Xiang
 */
const black = '#2b2b2b';
const white = '#fff';
const primary = '#007bff';
const secondary = '#6c757d';
const success = '#28a745';
const danger = '#dc3545';
const warning = '#ffc107';
const info = '#17a2b8';

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
}

export default ColorConfig;
