/*
 * Created on Sun May 13 2018
 *
 * Copyright (c) 2018 Youke Xiang
 */

const _themes = {
    default: {
        black: '#2b2b2b',
        white: '#fff',
        primary: '#007bff',
        secondary: '#6c757d',
        success: '#28a745',
        danger: '#dc3545',
        warning: '#ffc107',
        info: '#17a2b8',
        textLight: '#fff',
        textDark: '#000',
        background: '#fff',
        secondaryBackground: '#ccc'
    },
    gray: {
        black: '#000',
        white: '#fff',
        primary: '#555',
        secondary: '#888',
        success: '#28a745',
        danger: '#dc3545',
        warning: '#ffc107',
        info: '#c1c1c1',
        textLight: '#eee',
        textDark: '#ccc',
        background: '#2b2b2b',
        secondaryBackground: '#ccc'
    }
};

export default class Themes {
    static get(theme = 'default') {
        return _themes[theme];
    }
}
