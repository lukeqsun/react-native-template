import I18n from 'react-native-i18n';

I18n.fallbacks = true;

I18n.translations = {
    en: require('./en.json'),
    zh: require('./zh.json')
};