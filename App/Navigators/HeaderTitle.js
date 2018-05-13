import React from 'react';
import {Animated} from 'react-native';
import {MyStyleSheet} from '../Utilities';
import {connect} from 'react-redux';
import I18n from 'react-native-i18n';

const AnimatedText = Animated.Text;

const HeaderTitle = ({style, language, ...rest}) => {
    return (
        <AnimatedText
            numberOfLines={1}
            {...rest}
            style={[MyStyleSheet.get.headerTitle, style]}
            accessibilityTraits="header">
            {rest.children ? rest.children : I18n.t('welcome', {locale: language})}
        </AnimatedText>
    );
};

const mapStateToProps = (state) => {
    return {
        language: state.settings.language
    };
};

export default connect(mapStateToProps)(HeaderTitle);
